import "../Home/home.css";
import Header from "../../components/headers/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import HomeLogo from "../../assets/img/Vector (5).png";
import ScrollPhoto from "../../components/scrolledPhotos/ScrollPhoto";
import komshi2 from "../../assets/img/komshi(2).png";
import Services from "../../components/services/Services";
import Partners from "../../components/Partners/Partners";
import { Container, Row } from "react-bootstrap";
import { useLanguage } from "../../Context/ChangeLanguage";
import { useScrollBasket } from "../../Context/ShowBasket";
import ListMenu from "../../components/MenuList/ListMenu";
import axios from "axios";
import komshiLogo from "../../assets/img/komshiLogo.png";
import Basket from "../../components/Basket/Basket";
import GoToMenuBtn from "../../components/GoToMenuBtn";

function Home({ order = [], setOrder, values, setValues }) {
  const { toggleLang } = useLanguage();
  const { showBasket } = useScrollBasket();
  const { hash } = useLocation();
  const [menu, setMenu] = useState([]);

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
  const meanty = "ცომეული";
  useEffect(() => {
    const handleChildrenMenuList = async () => {
      try {
        const response = await axios.get(
          `https://komshii.com/api/store/filter/products/?search=${meanty}`
        );
        if (response.status >= 200 && response.status < 300) {
          setMenu(response.data.results);
        }
      } catch (error) {
        window.alert("product is not available");
      }
    };
    handleChildrenMenuList();
  }, []);
  return (
    <>
      {showBasket && <Basket order={order} setOrder={setOrder} />}
      <Header order={order} />
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
                  <span className="child0">
                    {" "}
                    {toggleLang === "ka" ? "დაგეგმე" : "Plan"}
                  </span>

                  <br />
                  <span className="child1">
                    <span className="child2">
                      {" "}
                      {toggleLang === "ka" ? "შენი" : "your"}
                    </span>{" "}
                    {toggleLang === "ka" ? "დღესასწაული" : "celebration"}
                  </span>
                </h1>
                <h2 className="strong">
                  {toggleLang === "ka" ? (
                    <>
                      კომპანია „კომში“ გთავაზობთ ფურშეტით უზრუნველყოფას
                      ნებისმიერი სახის ღონისძიებისთვის
                    </>
                  ) : (
                    <>
                      „Komshi“ provides catering services for all types of
                      occasions.
                    </>
                  )}
                </h2>

                <div className="buttonMenu">
                  <button onClick={MenuBtn}>
                    {toggleLang === "ka" ? "მენიუ" : "Menu"}
                  </button>
                </div>
              </div>
              <img src={komshi2} alt="Komshi catering" />
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
      <Container
        className="menuOnHome"
        style={{
          paddingTop: "50px",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <p className="menuHeadingOnHome">
          {toggleLang === "ka" ? "მენიუ" : "Menu"}
          <img src={komshiLogo} alt="Komshi" style={{ paddingLeft: "5px" }} />
        </p>
        <p
          style={{ paddingBottom: "50px", paddingTop: "0" }}
          className="menuLineOnHome"
        >
          {toggleLang === "ka"
            ? "ძირითადი მენიუ და შეთავაზებები"
            : "Main Menu and Offers"}
        </p>
        <div style={{ textAlign: "start" }}>
          {" "}
          <ListMenu
            product={menu}
            order={order}
            setOrder={setOrder}
            setValues={setValues}
            values={values}
          />
        </div>

        <GoToMenuBtn toggleLang={toggleLang} />
      </Container>
      <Footer />
    </>
  );
}
export default Home;
