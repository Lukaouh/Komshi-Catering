import React, { useEffect } from "react";
import "./Basket.css";
import { useScrollBasket } from "../../Context/ShowBasket";
import { useLanguage } from "../../Context/ChangeLanguage";
function Basket({ orderCard }) {
  const { toggleLang } = useLanguage();
  const { showBasket, handleChangeBasket } = useScrollBasket();
  console.log(orderCard.length);
  return (
    <div className="BasketContainer">
      <div className={`BasketContents ${showBasket ? "open" : ""}`}>
        <span
          className="popup-close"
          onClick={handleChangeBasket}
          style={{ width: "10px", height: "10px" }}
        >
          &times;
        </span>
        <h1>{toggleLang === "ka" ? "კალათა" : "Basket"}</h1>
        {orderCard.map((item) => (
          <div className="orderImage" key={item.id}>
            <img src={item.image} />
            <div className="orderText">
              <p>{item[`name_${toggleLang}`]}</p>
              <span>
                {item.quantity} &times; {item.price}₾
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
