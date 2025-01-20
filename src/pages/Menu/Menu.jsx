import React from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import ContactForm from "../../components/Contact-Form/ContactForm";
function Menu() {
  return (
    <>
      <Header />
      <SecondHeader name={DATA[3]?.title} />
      <Footer />
    </>
  );
}

export default Menu;
