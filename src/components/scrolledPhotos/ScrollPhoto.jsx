import React, { useState } from "react";

import "../scrolledPhotos/ScrollPhoto.css";
import komshi from "../../assets/img/advertising.jpeg";
import komshi2 from "../../assets/img/advertising2.jpeg";
import komshi3 from "../../assets/img/advertising3.jpeg";
export default function ScrollPhoto() {
  const buttons = ["button 1", "button 2", "button 3", "button 4", "button 5"];
  const photoArr = [komshi, komshi2, komshi3];
  const [currentPhoto, setCurrentPhoto] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <div className="boxContainer">
          <div className="imgSrc">
            <img src={photoArr[currentPhoto]} className="imgfluid" />
          </div>
          <div className="buttons">
            <div className="buttonFor">
              {buttons.map((value, index) => (
                <button
                  type="checkbox"
                  key={index}
                  onClick={() => {
                    if (index < photoArr.length) {
                      setCurrentPhoto(index);
                    }
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
