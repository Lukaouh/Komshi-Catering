import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";
import { DATA } from "./DATA";
import logo from "../../assets/img/header logo.png";
import basket from "../../assets/img/Vector.png";
import circle from "../../assets/img/Ellipse 22.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import MobHeader from "./HeadersItem/HeaderItems";
import HeaderItems from "./HeadersItem/HeaderItems";

function Header(props) {
  const [activeMenu, setActiveMenu] = useState(false);
  function toggleMenu() {
    setActiveMenu(!activeMenu);
  }
  const { pathname } = useLocation();
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="contactInfo">
            <div className="contact">
              <p>შეკვეთისთვის დაგვიკავშირდით</p>
              <span>+ 995 593 215 212</span>
            </div>
            <div className="line">
              <div className="lineHeight"></div>
            </div>
            <div className="changeLanguage">
              <p>{true ? "ENG" : "GEO"}</p>
            </div>
            <div className="line">
              <div className="lineHeight"></div>
            </div>
            <div className="basket">
              <img src={basket} alt="basket"></img>
              <div className="circle">
                <span>1</span>
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
                  title={item.title}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mobNavBackground">
        <div
          className={`container  ${activeMenu ? "mobileNavabar " : "hiddenNavbar"}`}
        >
          {DATA.map((item) => (
            <HeaderItems path={item.path} id={item.id} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Header;
