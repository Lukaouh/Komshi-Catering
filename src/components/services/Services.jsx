import React from "react";
import { DataService } from "./DataServices";
import "./Service.css";
import komshiLogo from "../../assets/img/komshiLogo.png";

import { Container, Row, Col } from "react-bootstrap";

function Services() {
  return (
    <Container fluid>
      <div className="container serviceComp">
        <div className="serviceText">
          <h1>
            სერვისები
            <a>
              <img src={komshiLogo} alt="Komshi Logo" />
            </a>
          </h1>
          <div className="servicePara">
            <p className="firstOne">ხარისხიანი პროდუქტი და მომსახურება</p>
            <p className="secondOne">
              კომშის მისიაა ადამიანები ვამოგზაუროთ გემრიელ სამყაროში, სადაც
              იქმნება ხანგრძლივი ემოციები, მოგონებები და ურთიერთობები.
            </p>
          </div>
        </div>
        <Row>
          {DataService.map((item) => (
            <Col>
              {" "}
              <div
                className={` ${item.active ? "coloredBack" : "components"}`}
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="serviceImage"
                />
                <p>{item.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Services;
