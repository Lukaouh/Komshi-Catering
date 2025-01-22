import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scrolledPhotos/ScrollPhoto.css";

export default function ScrollPhoto() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [galery, setGalery] = useState([]);
  useEffect(() => {
    try {
      async function getPhotos() {
        const response = await axios.get(
          "http://34.118.255.0:8000/api/store/images/"
        );
        if (response.status >= 200 && response.status < 300) {
          const image = response.data.map((item) => item.image);
          setGalery(image);
        }
      }
      getPhotos();
    } catch (error) {
      window.alert("");
    }
  }, []);

  useEffect(() => {
    galery.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [galery]);
  return (
    <div className="container">
      <div className="row">
        <div className="boxContainer">
          <div className="imgSrc">
            <img src={galery[currentPhoto]} className="imgfluid" />
          </div>
          <div className="buttons">
            <div className="buttonFor">
              {new Array(5).fill(null).map((value, index) => (
                <button
                  style={{
                    background: currentPhoto === index ? "#6DAAA9" : "",
                  }}
                  type="checkbox"
                  key={index}
                  onClick={() => {
                    if (index < galery.length) {
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
