import React, { useState, useEffect } from "react";

import "../scrolledPhotos/ScrollPhoto.css";
import komshi from "../../assets/img/advertising.jpeg";
import komshi2 from "../../assets/img/advertising2.jpeg";
import komshi3 from "../../assets/img/advertising3.jpeg";
export default function ScrollPhoto() {
  const buttons = ["button 1", "button 2", "button 3", "button 4", "button 5"];
  const photoArr = [komshi, komshi2, komshi3];
  const [currentPhoto, setCurrentPhoto] = useState(0);
  useEffect(() => {
    photoArr.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photoArr]);
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
                  style={{
                    background: currentPhoto == index ? "#6DAAA9" : "",
                  }}
                  type="checkbox"
                  key={index}
                  onClick={() => {
                    if (index < photoArr.length) {
                      setCurrentPhoto(index);
                      // console.log(index.id);
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
