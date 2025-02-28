import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scrolledPhotos/ScrollPhoto.css";
export async function getPhotos(setGallery) {
  try {
    const response = await axios.get("https://komshii.com/api/store/images/");
    if (response.status >= 200 && response.status < 300) {
      const image = response.data.map((item) => item.image);
      setGallery(image);
    }
  } catch (error) {
    window.alert("Failed to fetch images");
  }
}
export default function ScrollPhoto() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getPhotos(setGallery);
  }, []);
  useEffect(() => {
    gallery.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [gallery]);
  return (
    <div className="container">
      <div className="row">
        <div className="boxContainer">
          <div className="imgSrc">
            <img
              src={gallery[currentPhoto]}
              className="imgfluid"
              alt="advertisingPhoto"
            />
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
                    if (index < gallery.length) {
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
