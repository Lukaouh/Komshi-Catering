import "./Basket.css";
import { useScrollBasket } from "../../Context/ShowBasket";
import { useLanguage } from "../../Context/ChangeLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
function Basket({ values, order, setOrder }) {
  const { toggleLang } = useLanguage();
  const { showBasket, handleChangeBasket } = useScrollBasket();
  const navigate = useNavigate();
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
  const CartBtn = () => {
    navigate("/cart");
  };
  return (
    <div className={`BasketContainer ${showBasket ? "show" : ""}`}>
      <div className="BasketContents ">
        <div className="baskerHeader">
          <h2>{toggleLang === "ka" ? "კალათა" : "Basket"}</h2>
          <button onClick={handleChangeBasket}>
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          </button>
        </div>
        <div className="product">
          {" "}
          {order?.length > 0
            ? order.map((item, index) => (
                <div className="orderImage" key={index}>
                  <img src={item?.product_image} alt="product" />
                  <div className="orderText">
                    <p>{item?.[`product_name_${toggleLang}`]}</p>

                    <span>
                      {values?.[item?.id] ?? item?.quantity} &times;{" "}
                      {item?.product_price}₾
                    </span>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <div className="cartButton">
          {" "}
          {order.length > 0 && (
            <button onClick={CartBtn} className="goToCart">
              {toggleLang === "ka" ? "შეძენა" : "Order"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
