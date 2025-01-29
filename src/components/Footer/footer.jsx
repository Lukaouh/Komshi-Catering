import React from "react";
import "./../Footer/footer.css";
import phone from "../../assets/img/phone.png";
import gmail from "../../assets/img/gmail.png";
import footerLogo from "../../assets/img/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import footerKomshi from "../../assets/img/komshiFooter.png";
import { useLanguage } from "../../Context/ChangeLanguage";
function Footer() {
  const { toggleLang } = useLanguage();
  return (
    <>
      <div className="komshiLogo">
        <img src={footerKomshi} alt="komshiLogo" />
      </div>
      <div className="footerContainer">
        <div className="container footer">
          <div className="footerItem1">
            <img src={phone} alt="phone" />
            <div className="Info">
              <p>
                {toggleLang === "ka"
                  ? "შეკვეთისთვის დაგვიკავშირდით"
                  : "Contact us to place your order"}
              </p>
              <span
                className="numbers"
                onClick={() => (window.location.href = "tel:+995593215212")}
                style={{ cursor: "pointer" }}
              >
                + 995 593 215 212/ +995 599 550 107
              </span>
            </div>
          </div>
          <div className="footerItem1">
            <img src={gmail} alt="gmail" />
            <div className="Info">
              <p>
                {" "}
                {toggleLang === "ka" ? "ან მოგვწერეთ" : "Or send us a message "}
              </p>
              <span>komshi.customers@gmail.com</span>
            </div>
          </div>
          <div className="footerItem2">
            <div className="social Instagram">
              <a
                href="https://www.instagram.com/komshi.catering/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div className="social Facebook">
              <a
                href="https://www.facebook.com/profile.php?id=61559658651904"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </div>
          <div className="footerItem3">
            <div className="footerLogo">
              <img src={footerLogo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
