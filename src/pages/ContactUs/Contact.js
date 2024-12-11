import React from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
function Contact() {
  return (
    <>
      <Header />
      <SecondHeader name={DATA[4]?.title} />
    </>
  );
}

export default Contact;
