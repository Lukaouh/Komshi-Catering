import React from "react";
import "../secondHeader/secondHeader.css";

export default function secondHeader(props) {
  return (
    <div className="headContainer">
      <div className="background">
        <div className="container">
          <div className="main-text">
            <h1 className="h1Text">{props.name}</h1>
          </div>
          <div className="span-text">
            <a href="#">
              <span>მთავარი</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
