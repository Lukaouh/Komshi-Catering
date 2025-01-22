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
            <img
              src={komshiLogo}
              alt="Komshi Logo"
              style={{ paddingLeft: "5px" }}
            />
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
            <Col lg={6} xl={3} key={item.id}>
              <div className={` ${item.active ? "coloredBack" : "components"}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="serviceImage"
                  key={item.id}
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
