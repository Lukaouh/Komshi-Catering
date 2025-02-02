import React from "react";
import { useState } from "react";
import axios from "axios";
import "./ListMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../Context/ChangeLanguage";
import PopUp from "../../components/PopUp/PopUp";
function ListMenu({ product, values, handleChange }) {
  const { toggleLang } = useLanguage();
  const [popUp, setPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const ListIngredients = async (id) => {
    try {
      const response = await axios.get(
        `http://34.38.239.195:8000/api/store/products/${id}`
      );
      if (response.status >= 200 && response.status < 300) {
        setIngredients(response.data.ingredients);
        console.log(response.data.ingredients);
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
  return (
    <div className="cardContainer">
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
                  დეტალური აღწერა...
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
                      handleChange(element.id, values[element.id] - 1 || 10)
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    style={{ width: "50px", height: "35px" }}
                    value={values[element.id] || 10}
                    onChange={(e) =>
                      handleChange(element.id, Number(e.target.value))
                    }
                  />
                  <button
                    onClick={() =>
                      handleChange(
                        element.id,
                        (values[element.id] || 10) + 1,
                        console.log(values[element.id] + 1)
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="addToBasket"
                onClick={() =>
                  console.log("რაოდენობა", values[element.id], element.name_ka)
                }
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
