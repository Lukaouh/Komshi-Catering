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
function ListMenu({ product }) {
  const { showBasket, setShowBasket } = useScrollBasket();
  const { toggleLang } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [values, setValues] = useState({});
  const [orderCard, setOrderCard] = useState([]);
  const ListIngredients = async (id) => {
    try {
      const response = await axios.get(
        `http://34.38.239.195:8000/api/store/products/${id}`
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

  const handleAddCard = (element) => {
    setOrderCard((prevValue) => [...prevValue, element]);
    setShowBasket(true);
  };
  return (
    <div className="cardContainer">
      {showBasket && <Basket orderCard={orderCard} />}
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
              <div className="lunchPrice">
                <div className="priceInNumber">
                  <p> {element.price}₾</p>
                </div>
                <div className="Lunchbuttons">
                  {" "}
                  <button
                    onClick={() =>
                      handleChange(
                        element.id,
                        (values[element.id] ?? element.quantity) - 1,
                        element.quantity
                      )
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={values[element.id] ?? element.quantity}
                    style={{ width: "50px", height: "35px" }}
                    onChange={(e) =>
                      handleChange(
                        element.id,
                        Number(e.target.value),
                        element.quantity
                      )
                    }
                  />
                  <button
                    onClick={() =>
                      handleChange(
                        element.id,
                        (values[element.id] ?? element.quantity) + 1,
                        element.quantity
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="addToBasket"
                onClick={() => handleAddCard(element)}
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
