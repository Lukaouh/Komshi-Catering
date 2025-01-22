import "../Home/home.css";
import Header from "../../components/headers/Header";
import { DATA } from "../../components/headers/DATA";
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
function Home() {
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
                  დაგეგმე
                  <br />
                  <span className="child1">
                    <span className="child2">შენი</span> დღესასწაული
                  </span>
                </h1>
                <p>
                  კომპანია ,,კომში” გთავაზობთ პერსონალური, კორპორატიული და სხვა
                  ტიპის ღონისძიებების საკვებით უზრუნველყოფას.
                </p>
                <div className="buttonMenu">
                  <button onClick={MenuBtn}>მენიუ</button>
                </div>
              </div>
              <img src={komshi2} />
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
