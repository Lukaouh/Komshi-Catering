import React from "react";
import "./Cart.css";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { useLanguage } from "../../Context/ChangeLanguage";
import { useScrollBasket } from "../../Context/ShowBasket";
import { Container } from "react-bootstrap";
import { InputsButton } from "../../components/Inputs&Buttons/InputBtn";
import { useEffect } from "react";
import axios from "axios";

function Cart({ order = [], values, setValues, setOrder }) {
  const { toggleLang } = useLanguage();
  const { showBasket, setShowBasket } = useScrollBasket();
  const handleChange = (id, newValue, minQuantity) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: Math.max(newValue, minQuantity),
    }));
  };
  const removeItem = async (item) => {
    const ItemId = {
      product: item.product,
    };
    let sessionId = localStorage.getItem("session_id");
    try {
      const response = await fetch(
        "http://34.38.239.195:8000/api/order/cart/remove_item/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(sessionId ? { "Session-ID": sessionId } : {}),
          },
          credentials: "include",
          body: JSON.stringify(ItemId),
        }
      );
    } catch (error) {
      console.log("errori mak ", error);
    }
    setShowBasket(true);
  };
  useEffect(() => {
    const getMenuList = async () => {
      try {
        const sessionId = localStorage.getItem("session_id");

        const response = await axios.get(
          "http://34.38.239.195:8000/api/order/cart/",
          {
            headers: { "Session-ID": sessionId },
            credentials: "include",
          }
        );
        setOrder(response.data?.items || []);
      } catch (error) {
        console.error(
          "Menu is not sent to frontend:",
          error.response?.data || error.message
        );
      }
    };
    getMenuList();
  }, []);
  return (
    <>
      <Header order={order} />
      <SecondHeader name={toggleLang === "ka" ? "კალათა" : "Basket"} />
      <Container>
        <div className="CartLeft">
          <div className="cartHeader">
            <h5>დასახელება</h5>
            <h5>ფასი</h5>
            <h5>რაოდენობა</h5>
            <h5>ჯამი</h5>
          </div>
          {order.map((item) => (
            <div className="cartItem" key={item.id}>
              <button
                className="removeBtn"
                onClick={() => {
                  removeItem(item);
                }}
              >
                X
              </button>
              <img
                src={item.product_image}
                alt={item.product_name_ka}
                className="cartImage"
              />
              <p className="productName">
                {item[`product_name_${toggleLang}`]}
              </p>
              <div className="ItemContent">
                <InputsButton
                  element={item}
                  element_id={item.product}
                  values={values}
                  handleChange={handleChange}
                />
                <div className="totalPrice">
                  {" "}
                  <p>{item.total_price}₾</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Cart;
