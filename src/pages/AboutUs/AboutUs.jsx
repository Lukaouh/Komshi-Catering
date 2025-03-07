import React, { useEffect, useState } from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import { getPhotos } from "../../components/scrolledPhotos/ScrollPhoto";
import "../AboutUs/AboutUs.css";
import Footer from "../../components/Footer/footer";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../../Context/ChangeLanguage";
import { AboutText } from "./AboutText";
export default function AboutUs({ order }) {
  const [images, setImages] = useState([]);
  const { toggleLang } = useLanguage();
  useEffect(() => {
    getPhotos(setImages);
  }, []);

  const image1 = images.find((image) => image.id === 14);

  const image2 = images.find((image) => image.id === 16);
  const image3 = images.find((image) => image.id === 17);

  return (
    <>
      <Header id={DATA[1].id} order={order} />
      <SecondHeader name={DATA[1]?.[`title_${toggleLang}`]} />
      <Container>
        <div className="containerValue">
          <Row>
            <Col>
              <div className="LeftSide">
                <h1>
                  {toggleLang === "ka" ? (
                    <>
                      ქეითერინგ კომპანია <span className="komshi">„კომში“</span>
                    </>
                  ) : (
                    <>
                      Catering Company <span className="komshi">„Komshi“</span>
                    </>
                  )}
                </h1>

                <div className="Paraghrap">
                  {AboutText.map((text, index) => (
                    <p key={index}>{text[`name_${toggleLang}`]}</p>
                  ))}
                </div>
              </div>
            </Col>
            <Col>
              <div className="RightSide">
                <div className="GridContaier">
                  <div className="staffImg1">
                    <img src={image1?.image} alt="staff"></img>
                  </div>
                  <div className="staffImg2">
                    <img src={image2?.image} alt="staff"></img>
                  </div>
                  <div className="staffImg3">
                    <img src={image3?.image} alt="staff"></img>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}
