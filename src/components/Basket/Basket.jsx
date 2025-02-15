import "./Basket.css";
import { useScrollBasket } from "../../Context/ShowBasket";
import { useLanguage } from "../../Context/ChangeLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Basket({ values, order }) {
  const { toggleLang } = useLanguage();
  const { showBasket, handleChangeBasket } = useScrollBasket();
  const navigate = useNavigate();

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
            ? order.map((item) => (
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
            : ""}
        </div>
        <div className="cartButton">
          {" "}
          {order.length > 0 && (
            <buttons onClick={CartBtn} className="goToCart">
              {toggleLang === "ka" ? "შეძენა" : "Order"}
            </buttons>
          )}
        </div>
      </div>
    </div>
  );
}

export default Basket;
