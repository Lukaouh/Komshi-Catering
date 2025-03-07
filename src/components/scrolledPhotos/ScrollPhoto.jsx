import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scrolledPhotos/ScrollPhoto.css";
export async function getPhotos(setGallery) {
  try {
    const response = await axios.get("https://komshii.com/api/store/images/");

    if (response.status >= 200 && response.status < 300) {
      const images = response.data.map((item) => {
        return { id: item.id, image: item.image }; // Fixing the syntax
      });
      setGallery(images); // Update gallery with fetched images
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
  const image1 = gallery.find((image) => image.id === 2);
  const image2 = gallery.find((image) => image.id === 9);
  const image3 = gallery.find((image) => image.id === 11);
  const image4 = gallery.find((image) => image.id === 8);
  const image5 = gallery.find((image) => image.id === 13);
  const imageArr = [
    image1?.image,
    image2?.image,
    image3?.image,
    image4?.image,
    image5?.image,
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="boxContainer">
          <div className="imgSrc">
            <img
              src={imageArr[currentPhoto]}
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
