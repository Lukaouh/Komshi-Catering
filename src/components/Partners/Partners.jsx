import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "./Partners.css";
import { useRef } from "react";
import komshiLogo from "../../assets/img/komshiLogo.png";
import { useLanguage } from "../../Context/ChangeLanguage";
function Partners() {
  const scrollContainerRef = useRef(null);
  const [partners, setPartners] = useState([]);
  const { toggleLang } = useLanguage();
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const getPartners = async () => {
      try {
        const response = await axios.get(
          "http://34.118.255.0:8000/api/store/partners/"
        );

        if (response.status >= 200 && response.status < 300) {
          const companies = response.data.map((item) => item.image);
          setPartners(companies);
        }
      } catch (error) {
        window.alert("partners section is not available at this moment!");
      }
    };
    getPartners();
  }, []);

  return (
    <Container>
      <div className="partners">
        <div
          className="partnerText"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <h1>{toggleLang === "ka" ? "პარტნიორები" : "Partners"}</h1>

          <img src={komshiLogo} alt="Komshi Logo" />
        </div>
        <p>
          {toggleLang === "ka"
            ? "ვიმოგზაუროთ გემრიელ სამყაროში!"
            : "Let's travel to the delicious world!"}
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            paddingBottom: "50px",
          }}
        >
          <button className="Leftbtn" onClick={scrollLeft}>
            &#8249;
          </button>

          <div
            ref={scrollContainerRef}
            style={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: "15px",
              paddingTop: "50px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {partners.map((item, index) => (
              <div
                className="partnerLogos"
                key={index}
                style={{ flexShrink: 0 }}
              >
                <img src={item} alt={`Partner ${index}`} />
              </div>
            ))}
          </div>

          <button className="Rightbtn" onClick={scrollRight}>
            &#8250;
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Partners;
