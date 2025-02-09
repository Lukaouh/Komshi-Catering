import React, { useEffect, useState } from "react";
import "./Basket.css";
import { useScrollBasket } from "../../Context/ShowBasket";
import { useLanguage } from "../../Context/ChangeLanguage";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Basket({ values, order, setOrder }) {
  const { toggleLang } = useLanguage();
  const { showBasket, handleChangeBasket } = useScrollBasket();

  useEffect(() => {
    const getRequest = async () => {
      try {
        const sessionId = localStorage.getItem("session_id");

        const response = await axios.get(
          "http://34.38.239.195:8000/api/order/cart/",
          {
            headers: { "Session-ID": sessionId },
            credentials: "include",
          }
        );

        setOrder(response.data?.items || []); // Ensure no undefined errors
      } catch (error) {
        console.error(
          "Menu is not sent to frontend:",
          error.response?.data || error.message
        );
      }
    };
    getRequest();
  }, []);
  return (
    <div className={`BasketContainer ${showBasket ? "show" : ""}`}>
      <div className="BasketContents ">
        <div className="baskerHeader">
          <h2>{toggleLang === "ka" ? "კალათა" : "Basket"}</h2>
          <button onClick={handleChangeBasket}>
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
        </div>
        {order?.length > 0 ? (
          order.map((item) => (
            <div className="orderImage" key={item?.id}>
              <img src={item?.product_image} alt="" />
              <div className="orderText">
                <p>{item?.[`product_name_${toggleLang}`]}</p>

                <span>
                  {values?.[item?.id] ?? item?.quantity} &times;{" "}
                  {item?.product_price}₾
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>{toggleLang === "ka" ? "კალათა ცარიელია" : "Basket is empty"}</p>
        )}
      </div>
    </div>
  );
}

export default Basket;
