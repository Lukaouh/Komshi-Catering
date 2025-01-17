import React from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";

import "../AboutUs/AboutUs.css";
import Footer from "../../components/Footer/footer";
import staff from "../../assets/img/advertising.jpeg";
import aboutMe from "../../assets/img/aboutUs.jpeg";
// import aboutMe2 from "../../assets/img/aboutUs2.jpeg";

import { Container, Row, Col } from "react-bootstrap";
export default function AboutUs() {
  return (
    <>
      <Header id={DATA[1].id} />
      <SecondHeader name={DATA[1]?.title} />
      <Container>
        <div className="containerValue">
          <Row>
            <Col>
              <div className="LeftSide">
                <h1>
                  ქეითერინგ კომპანია <span className="komshi">"კომში"</span>
                </h1>
                <div className="Paraghrap">
                  <p>
                    ტრაპეზარიას არომატული, ჯანსაღი, მრავალფეროვანი კერძები
                    პირდაპირ ჩვენი სამზარეულოდან თქვენს მაგიდაზე მოხვდება.
                    დანაყრდით და  „ითამაშეთ“ რჩეული გემოებით, ყველანაირი რისკის
                    გარეშე. მაღალი სტანდარტების, სწრაფი მომსახურებისა და
                    სანდოობის შენარჩუნება ჩვენი მთავარი პრიორიტეტია.ტრაპეზარიას
                    არომატული, ჯანსაღი, მრავალფეროვანი კერძები პირდაპირ ჩვენი
                    სამზარეულოდან თქვენს მაგიდაზე მოხვდება. დანაყრდით და 
                    „ითამაშეთ“ რჩეული გემოებით, ყველანაირი რისკის გარეშე. მაღალი
                    სტანდარტების, სწრაფი მომსახურებისა და სანდოობის შენარჩუნება
                    ჩვენი მთავარი პრიორიტეტია. ტრაპეზარიას არომატული,ჯანსაღი,
                    მრავალფეროვანი კერძები პირდაპირ ჩვენი სამზარეულოდან თქვენს
                    მაგიდაზე მოხვდება. დანაყრდით და  „ითამაშეთ“ რჩეული გემოებით,
                    ყველანაირი რისკის გარეშე. მაღალი სტანდარტების, სწრაფი
                    მომსახურებისა და სანდოობის შენარჩუნება ჩვენი მთავარი
                    პრიორიტეტია.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="RightSide">
                <div className="GridContaier">
                  <div className="staffImg1">
                    <img src={aboutMe} alt="staff"></img>
                  </div>
                  <div className="staffImg2">
                    <img src={aboutMe} alt="staff"></img>
                  </div>
                  <div className="staffImg3">
                    <img src={staff} alt="staff"></img>
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
