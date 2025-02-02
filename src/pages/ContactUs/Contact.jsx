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
import { useLanguage } from "../../Context/ChangeLanguage";
function Contact() {
  const { toggleLang } = useLanguage();
  const handleSubmited = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://34.38.239.195:8000/api/contact/contact/",
        data
      );
      if (response.status >= 200 && response.status < 300) {
        window.alert("Thanks for your feedbeck!");
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <SecondHeader name={DATA[4]?.[`title_${toggleLang}`]} />
      <div className="container contactlayout">
        <div className="companyInfo">
          <div style={style.divStyle}>
            <img src={phone} alt="phoneLogo" style={style.imgStyle} />
            <div className="contactContent" style={{ paddingLeft: "20px" }}>
              <p>
                {toggleLang === "ka"
                  ? "შეკვეთისთვის დაგვიკავშირდით"
                  : "Contact us to place your order"}
              </p>
              <span
                onClick={() => (window.location.href = "tel:+995593215212")}
              >
                + 995 593 215 212/ +995 599 550 107
              </span>
            </div>
          </div>
          <div style={style.divStyle}>
            <img src={gmail} alt="gmailLogo" style={style.imgStyle} />
            <div className="contactContent" style={{ paddingLeft: "20px" }}>
              <p>
                {toggleLang === "ka" ? "ან მოგვწერეთ" : "Or send us a message"}
              </p>
              <span>komshi.customers@gmail.com</span>
            </div>
          </div>
          <div style={style.divStyle}>
            <img src={location} alt="locationLog" style={style.imgStyle} />
            <div className="contactContent" style={{ paddingLeft: "20px" }}>
              <p>{toggleLang === "ka" ? "მისამართი" : "Our Address"}</p>
              <span>Tbilisi,Ilia vekua st.27</span>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <ContactForm handleSubmited={handleSubmited} />
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
