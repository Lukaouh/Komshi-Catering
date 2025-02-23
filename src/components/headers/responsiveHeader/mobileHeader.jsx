import React from "react";
import "./MobileHeader.css";
import HeaderItems from "../HeadersItem/HeaderItems";
import { DATA } from "../DATA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../../../Context/ChangeLanguage";
function MobileHeader() {
  const { toggleLang } = useLanguage();
  return (
    <div className="mobHeader">
      <div className="headerItems">
        {DATA.map((item) => (
          <HeaderItems
            path={item.path}
            id={item.id}
            title={item[`title_${toggleLang}`]}
            key={item.id}
          />
        ))}
      </div>
      <div
        className="social"
        style={{
          paddingLeft: "20px",
          paddingTop: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=61559658651904"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#6baaa9" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/komshi.catering/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#6baaa9",
            paddingLeft: "10px",
          }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default MobileHeader;
