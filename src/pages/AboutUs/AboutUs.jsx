import React from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import catering from "../../assets/img/catering.png";
import "../AboutUs/AboutUs.css";
import Footer from"../../components/Footer/footer";
export default function AboutUs() {
  return (
    <>
      <Header id={DATA[1].id} />
      <SecondHeader name={DATA[1]?.title} />
      <div className="container containerValue">
        <div className="LeftSide col-6">
          <img src={catering} alt="company"></img>
          <div className="Paraghrap">
            <p>
              ტრაპეზარიას არომატული, ჯანსაღი, მრავალფეროვანი კერძები პირდაპირ
              ჩვენი სამზარეულოდან თქვენს მაგიდაზე მოხვდება. დანაყრდით და 
              „ითამაშეთ“ რჩეული გემოებით, ყველანაირი რისკის გარეშე. მაღალი
              სტანდარტების, სწრაფი მომსახურებისა და სანდოობის შენარჩუნება ჩვენი
              მთავარი პრიორიტეტია.ტრაპეზარიას არომატული, ჯანსაღი, მრავალფეროვანი
              კერძები პირდაპირ ჩვენი სამზარეულოდან თქვენს მაგიდაზე მოხვდება.
              დანაყრდით და  „ითამაშეთ“ რჩეული გემოებით, ყველანაირი რისკის
              გარეშე. მაღალი სტანდარტების, სწრაფი მომსახურებისა და სანდოობის
              შენარჩუნება ჩვენი მთავარი პრიორიტეტია. ტრაპეზარიას
              არომატული,ჯანსაღი, მრავალფეროვანი კერძები პირდაპირ ჩვენი
              სამზარეულოდან თქვენს მაგიდაზე მოხვდება. დანაყრდით და  „ითამაშეთ“
              რჩეული გემოებით, ყველანაირი რისკის გარეშე. მაღალი სტანდარტების,
              სწრაფი მომსახურებისა და სანდოობის შენარჩუნება ჩვენი მთავარი
              პრიორიტეტია.
            </p>
          </div>
        </div>
        <div className="RightSide col-6">
          <div className="GridContaier">
            <div className="staffImg1">{/* <img src={staff}></img> */}</div>
            <div className="staffImg2">{/* <img src={staff}></img> */}</div>
            <div className="staffImg3">{/* <img src={staff}></img> */}</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
