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
export default function AboutUs() {
  const [images, setImages] = useState([]);
  const { toggleLang } = useLanguage();
  useEffect(() => {
    getPhotos(setImages);
  }, []);
  return (
    <>
      <Header id={DATA[1].id} />
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
                  {AboutText.map((text) => (
                    <p>{text[`name_${toggleLang}`]}</p>
                  ))}
                </div>
              </div>
            </Col>
            <Col>
              <div className="RightSide">
                <div className="GridContaier">
                  <div className="staffImg1">
                    <img src={images[6]} alt="staff"></img>
                  </div>
                  <div className="staffImg2">
                    <img src={images[4]} alt="staff"></img>
                  </div>
                  <div className="staffImg3">
                    <img src={images[1]} alt="staff"></img>
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
