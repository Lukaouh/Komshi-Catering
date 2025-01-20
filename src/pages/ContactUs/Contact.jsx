import React, { useState, useEffect } from "react";
import "./../ContactUs/Contact.css";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import phone from "../../assets/img/phone-2.png";
import gmail from "../../assets/img/email-2.png";
import location from "../../assets/img/location.png";
import axios from "axios";
import ContactForm from "../../components/Contact-Form/ContactForm";
function Contact() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    text: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // console.log(values);
  };

  const handlClick = async () => {
    try {
      const response = await axios.post("", values);
      if (response.status >= 200 && response.status < 300) {
        console.log("Request was successful");
      }
    } catch (error) {
      console.log("message didnot send", error);
      window.alert(error.message);
    }
  };
  return (
    <>
      <Header />
      <SecondHeader name={DATA[5]?.title} />
      <div className="container contactlayout">
        <div className="companyInfo">
          <div style={style.divStyle}>
            <img src={phone} alt="phoneLogo" style={style.imgStyle} />
            <div className="contactContent" style={{ paddingLeft: "20px" }}>
              <p>შეკვეთისთვის დაგვიკავშირდით</p>
              <span
                onClick={() => (window.location.href = "tel:+995593215212")}
              >
                + 995 593 215 212
              </span>
            </div>
          </div>
          <div style={style.divStyle}>
            <img src={gmail} alt="gmailLogo" style={style.imgStyle} />
            <div className="contactContent" style={{ paddingLeft: "20px" }}>
              <p>ან მოგვწერეთ</p>
              <span>info.komshi@gmail.com</span>
            </div>
          </div>
          <div style={style.divStyle}>
            <img src={location} alt="locationLog" style={style.imgStyle} />
            <div className="contactContent" style={{ paddingLeft: "20px" }}>
              <p>მისამართი</p>
              <span>Tbilisi,vake,tamarashvili st.65</span>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <ContactForm
            handleChange={handleChange}
            values={values}
            handlClick={handlClick}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

const style = {
  divStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    border: "5px solid rgba(107, 170, 169, 0.3)",
    borderRadius: "50%",
    backgroundColor: "rgba(107, 170, 169, 0.8)",
    boxShadow: "0 0 0 8px rgba(87, 75, 75, 0.2)",
  },
};
