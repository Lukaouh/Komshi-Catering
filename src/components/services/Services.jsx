import React from "react";
import { DataService } from "./DataServices";
import { ServiceTexts } from "./DataServices";
import "./Service.css";
import komshiLogo from "../../assets/img/komshiLogo.png";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../../Context/ChangeLanguage";
function Services() {
  const { toggleLang } = useLanguage();
  return (
    <Container fluid>
      <div className="container serviceComp">
        <div className="serviceText">
          {ServiceTexts.map((text, index) => (
            <div key={index}>
              <h1>
                {text[`name_${toggleLang}`]}
                <img
                  src={komshiLogo}
                  alt="Komshi Logo"
                  style={{ paddingLeft: "5px" }}
                />
              </h1>
            </div>
          ))}

          <div className="servicePara">
            {ServiceTexts.map((para, index) => (
              <p className="firstOne" key={index}>
                {" "}
                {para[`paragraph_name_${toggleLang}`]}
              </p>
            ))}
          </div>
        </div>
        <Row style={{ paddingTop: "50px" }}>
          {DataService.map((item, index) => (
            <Col lg={6} xl={3} key={item.id}>
              <div
                className={` ${item.active ? "coloredBack" : "components"}`}
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="serviceImage"
                  key={item.id}
                />
                <p>{item[`name_${toggleLang}`]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Services;
