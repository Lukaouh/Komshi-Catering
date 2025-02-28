import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../Context/ChangeLanguage";
import PopUp from "../../components/PopUp/PopUp";
import { useScrollBasket } from "../../Context/ShowBasket";
import Basket from "../Basket/Basket";
import { InputsButton } from "../Inputs&Buttons/InputBtn";
function ListMenu({ product, order, setOrder, values, setValues }) {
  const { showBasket, setShowBasket } = useScrollBasket();
  const { toggleLang } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const ListIngredients = async (id) => {
    try {
      const response = await axios.get(
        `https://komshii.com/api/store/products/${id}`
      );
      if (response.status >= 200 && response.status < 300) {
        setIngredients(response.data.ingredients);
      }
    } catch (error) {
      window.alert("product is not available");
    }
  };

  const selectedItem = (product) => {
    setSelectedProduct(product);
    ListIngredients(product.id);
  };
  const closePopUp = () => {
    setSelectedProduct(null);
  };

  const handleChange = (id, newValue, minQuantity) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: Math.max(newValue, minQuantity),
    }));
  };
  useEffect(() => {
    const getMenuList = async () => {
      try {
        const sessionId = sessionStorage.getItem("session_id");

        const response = await axios.get(
          "https://komshii.com/api/order/cart/",
          {
            headers: { "Session-ID": sessionId },
            credentials: "include",
          }
        );
        setOrder(response.data?.items);
      } catch (error) {
        console.error(
          "Menu is not sent to frontend:",
          error.response?.data || error.message
        );
      }
    };
    getMenuList();
  }, []);

  const PostMenuList = async (element) => {
    const newItem = {
      product: element.id,
      quantity: values[element.id] ?? element.quantity,
    };

    let sessionId = sessionStorage.getItem("session_id");
    try {
      const response = await fetch("https://komshii.com/api/order/cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(sessionId ? { "Session-ID": sessionId } : {}),
        },
        credentials: "include",
        body: JSON.stringify(newItem),
      });

      const data = await response.json();
      if (!sessionId && data.session_id) {
        sessionStorage.setItem("session_id", data.session_id);
      }
      const updatedOrder = await axios.get(
        "https://komshii.com/api/order/cart/",
        {
          headers: { "Session-ID": sessionId },
          credentials: "include",
        }
      );
      setOrder(updatedOrder.data?.items);
    } catch (error) {
      console.error("Error posting menu:", error.message);
    }
    setShowBasket(true);
  };

  return (
    <div className="cardContainer">
      {showBasket && <Basket order={order} setOrder={setOrder} />}
      {product.map((element, index) => (
        <div key={index}>
          <div
            className="cardContaineeer"
            key={element.id}
            style={{ paddingTop: "10px" }}
          >
            <div className="lunchBox">
              <img src={element.image} />
              <div className="Itemh4">
                <h4 className="cardTitle">{element[`name_${toggleLang}`]}</h4>
              </div>
              <div className="PopUp">
                {" "}
                <button onClick={() => selectedItem(element)}>
                  {toggleLang == "ka"
                    ? "დეტალური აღწერა..."
                    : "View Ingredients... "}
                </button>
              </div>
              <InputsButton
                element={element}
                element_id={element.id}
                values={values}
                handleChange={handleChange}
              />
              <button
                className="addToBasket"
                onClick={() => PostMenuList(element)}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  style={{ paddingRight: "5px", fontSize: "16px" }}
                  className="checkOutBasket"
                />
                {toggleLang === "ka" ? "კალათაში დამატება" : "Add to basket"}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* PopUp Component */}
      {selectedProduct && (
        <PopUp
          toggleLang={toggleLang}
          selectedProduct={selectedProduct}
          closePopUp={closePopUp}
          ingredients={ingredients}
        />
      )}
    </div>
  );
}

export default ListMenu;
