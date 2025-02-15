import React from "react";
import "./Cart.css";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { useLanguage } from "../../Context/ChangeLanguage";
import { useScrollBasket } from "../../Context/ShowBasket";
import { Link } from "react-router-dom";
import { InputsButton } from "../../components/Inputs&Buttons/InputBtn";
import { useEffect } from "react";
import axios from "axios";
import CartForm from "../../components/Contact-Form/CartForm";
import GoToMenuBtn from "../../components/GoToMenuBtn";
import { object } from "yup";

function Cart({ order = [], values, setValues, setOrder }) {
  const { toggleLang } = useLanguage();
  const { setShowBasket } = useScrollBasket();
  const handleChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: Math.max(newValue || 10, 10),
    }));
  };
  const removeItem = async (item) => {
    const ItemId = {
      product: item.product,
    };
    let sessionId = sessionStorage.getItem("session_id");
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

      await getMenuList();
    } catch (error) {
      console.log("Error removing item:", error);
    }
    setShowBasket(true);
  };

  const getMenuList = async () => {
    try {
      const sessionId = sessionStorage.getItem("session_id");

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

  const updatedOrderData = order.map((item) => {
    return {
      product: item.product,
      quantity: values[item.product] || item.quantity,
    };
  });
  const updateOrderList = async (updatedOrderData) => {
    const sessionId = sessionStorage.getItem("session_id") || null;
    try {
      const response = await fetch(
        "http://34.38.239.195:8000/api/order/cart/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...(sessionId ? { "Session-ID": sessionId } : {}),
          },
          credentials: "include",
          body: JSON.stringify(updatedOrderData),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      await getMenuList();
    } catch (error) {
      console.error("Error updating order:", error.message);
    }
  };

  useEffect(() => {
    getMenuList();
  }, []);
  const handleSubmitedMenu = async (data) => {
    console.log(data);
    try {
      const sessionId = sessionStorage.getItem("session_id");
      const response = await fetch(
        "http://34.38.239.195:8000/api/order/cart/order/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(sessionId ? { "Session-ID": sessionId } : {}),
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        window.alert("Thanks for your feedbeck!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <>
      <Header order={order} />
      <SecondHeader name={toggleLang === "ka" ? "კალათა" : "Basket"} />

      <main>
        {order.length > 0 ? (
          <div className="cartLay">
            <div className="CartLeft">
              {order.map((item, index) => (
                <div className="cartItem" key={index}>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="ProductDetailInfo"
                  >
                    <p className="productName" style={{ height: "20px" }}>
                      {item[`product_name_${toggleLang}`]}
                    </p>

                    <div className="PriceAndQuantity">
                      <div>
                        {" "}
                        <InputsButton
                          element={item}
                          element_id={item.product}
                          values={values}
                          handleChange={handleChange}
                        />
                      </div>
                      <div className="totalPrice">
                        <p>{item.total_price}₾</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="updateMenu">
                <button
                  onClick={() => {
                    updateOrderList(updatedOrderData);
                  }}
                >
                  კალათის განახლება
                </button>
              </div>
            </div>
            <div className="CartRight">
              <CartForm handleSubmited={handleSubmitedMenu} />
            </div>
          </div>
        ) : (
          <div style={style.orderEmpty}>
            <h3 className="emptyCart">
              {toggleLang === "ka"
                ? "კალათა ცარიელია, გთხოვთ აირჩიეთ პროდუქტი მენიუდან"
                : "Basket is empty, Please choose products from the menu"}
            </h3>
            <GoToMenuBtn toggleLang={toggleLang} />
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;

const style = {
  orderEmpty: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    paddingTop: "50px",
  },
};
