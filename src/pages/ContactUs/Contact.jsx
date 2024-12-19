import React from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from"../../components/Footer/footer";
function Contact() {
  return (
    <>
      <Header />
      <SecondHeader name={DATA[5]?.title} />
      <Footer/>
    </>
  );
}

export default Contact;
