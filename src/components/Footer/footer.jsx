import React from "react";
import "./../Footer/footer.css";
import phone from "../../assets/img/phone.png";
import gmail from "../../assets/img/gmail.png";
import footerLogo from "../../assets/img/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="container footer">
          <div className="footerItem1">
            <img src={phone} alt="phone" />
            <div className="Info">
              <p>შეკვეთისთვის დაგვიკავშირდით</p>
              <span>+ 995 593 215 212</span>
            </div>
          </div>
          <div className="footerItem1">
            <img src={gmail} alt="gmail" />
            <div className="Info">
              <p>ან მოგვწერეთ</p>
              <span>info.komshi@gmail.com</span>
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
export default footer;
