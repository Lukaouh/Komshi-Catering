import "../Home/home.css";
import Header from "../../components/headers/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import HomeLogo from "../../assets/img/Vector (5).png";
import ScrollPhoto from "../../components/scrolledPhotos/ScrollPhoto";
import komshi2 from "../../assets/img/komshi(2).png";
import Services from "../../components/services/Services";
import Partners from "../../components/Partners/Partners";
import { Container, Row } from "react-bootstrap";
import { useLanguage } from "../../Context/ChangeLanguage";
function Home() {
  const { toggleLang } = useLanguage();
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  const navigate = useNavigate();
  const MenuBtn = () => {
    navigate("/menu");
  };
  return (
    <>
      <Header />
      <div className="mainDiv">
        <div className="styledBackground">
          <div className="styledBox">
            <img src={HomeLogo} className="homeLogo" alt="homeLogo"></img>
          </div>
        </div>
        <Container>
          <Row className="homeRow">
            <div className="firstHalf ">
              <div className="content">
                <h1>
                  {toggleLang === "ka" ? "დაგეგმე" : "Plan"}
                  <br />
                  <span className="child1">
                    <span className="child2">
                      {" "}
                      {toggleLang === "ka" ? "შენი" : "your"}
                    </span>{" "}
                    {toggleLang === "ka" ? "დღესასწაული" : "celebration"}
                  </span>
                </h1>
                <p>
                  {toggleLang === "ka"
                    ? "კომპანია „კომში“ გთავაზობთ საკვებით უზრუნველყოფას ნებისმიერი სახის ღონისძიებისთის"
                    : " „Komshi“ provides catering services for all types of occasions."}
                </p>
                <div className="buttonMenu">
                  <button onClick={MenuBtn}>
                    {toggleLang === "ka" ? "მენიუ" : "Menu"}
                  </button>
                </div>
              </div>
              <img src={komshi2} alt="komshi" />
            </div>
            <div className="secondHlf">
              <ScrollPhoto />
            </div>
          </Row>
        </Container>
      </div>
      <Services />
      <section id="partnership">
        <Partners />
      </section>
      <Footer />
    </>
  );
}
export default Home;
