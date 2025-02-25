import "./header.css";
import { DATA } from "./DATA";
import logo from "../../assets/img/header logo.png";
import basket from "../../assets/img/Vector.png";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

import HeaderItems from "./HeadersItem/HeaderItems";
import MobileHeader from "./ResponsiveHeader/MobileHeader";
import { useLanguage } from "../../Context/ChangeLanguage";
import { useScrollBasket } from "../../Context/ShowBasket";
function Header({ order }) {
  const { toggleLang, handleChangeLang } = useLanguage();
  const { showBasket, handleChangeBasket } = useScrollBasket();
  const [activeMenu, setActiveMenu] = useState(false);
  function toggleMenu() {
    setActiveMenu(!activeMenu);
  }
  // const { pathname } = useLocation();

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="contactInfo">
            <div className="contact">
              <p>
                {toggleLang === "ka"
                  ? "შეკვეთისთვის დაგვიკავშირდით "
                  : "Contact us to place your order"}
              </p>
              <span
                onClick={() => (window.location.href = "tel:+995593215212")}
              >
                + 995 593 215 212
              </span>
            </div>
            <div className="line">
              <div className="lineHeight"></div>
            </div>
            <div className="changeLanguage">
              <button onClick={handleChangeLang}>
                {toggleLang === "en" ? "GEO" : "ENG"}
              </button>
            </div>
            <div className="line">
              <div className="lineHeight"></div>
            </div>
            <div className="basket">
              <FontAwesomeIcon
                icon={faShoppingBasket}
                onClick={handleChangeBasket}
                style={{
                  color: "rgba(124, 124, 124, 1)",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
              <div className="circle">
                <span>{order.length}</span>
              </div>
            </div>
          </div>
          <div className="header">
            <Link to="/">
              <img src={logo} alt="logo" className="activeLogo"></img>
            </Link>
            <div className="burger-icon">
              <FontAwesomeIcon
                icon={activeMenu ? faX : faBars}
                className="burger"
                onClick={toggleMenu}
              />
            </div>
            <div className="pages">
              {DATA.map((item) => (
                <HeaderItems
                  path={item.path}
                  id={item.id}
                  title={item[`title_${toggleLang}`]}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={activeMenu ? "showNavbar" : "mobileNavabar"}>
        <div className="headerItemsMob">
          <MobileHeader />
        </div>
      </div>
    </>
  );
}
export default Header;
