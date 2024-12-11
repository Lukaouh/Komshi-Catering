import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";
import { DATA } from "./DATA";
import logo from "../../assets/img/header logo.png";
import basket from "../../assets/img/Vector.png";
import circle from "../../assets/img/Ellipse 22.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { pathname } = useLocation();
  console.log(pathname);

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
                <span>2</span>
              </div>
            </div>
          </div>
          <div className="header">
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
            <div className="pages">
              <ul>
                {DATA.map((item) => (
                  <Link to={item.path} key={item.id}>
                    <li
                      className={`title ${
                        pathname === item.path ? "active" : ""
                      }`}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
