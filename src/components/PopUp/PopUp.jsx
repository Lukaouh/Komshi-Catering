import React from "react";
import "./PopUp.css";
function PopUp({ selectedProduct, closePopUp, toggleLang, ingredients }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="popup-close" onClick={closePopUp}>
          &times;
        </span>
        <div
          className="image
        "
        >
          {" "}
          <img
            style={{ width: "200px", height: "200px" }}
            src={selectedProduct.image}
            alt={selectedProduct[`name_${toggleLang}`]}
          />
        </div>
        <div className="IngredientInfo">
          {" "}
          <h3>{selectedProduct[`name_${toggleLang}`]}</h3>
          <ol style={{ paddingLeft: "15px" }}>
            {ingredients.map((item, index) => (
              <li key={index}>{item[`name_${toggleLang}`]}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
