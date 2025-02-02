import React from "react";
import "../secondHeader/secondHeader.css";
import { useLanguage } from "../../Context/ChangeLanguage";
import { Link } from "react-router-dom";
export default function SecondHeader(props) {
  const { toggleLang } = useLanguage();
  return (
    <div className="headContainer">
      <div className="background">
        <div className="container">
          <div className="main-text">
            <h1 className="h1Text">{props.name}</h1>
          </div>
          <div className="span-text">
            <Link to="/">
              <span>{toggleLang === "ka" ? "მთავარი" : "Home Page"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
