import { useState } from "react";
import "./Menu.css";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Category from "../../components/Category/Category";
import ListMenu from "../../components/MenuList/ListMenu";
import { useLanguage } from "../../Context/ChangeLanguage";

function Menu() {
  const { toggleLang } = useLanguage();
  const [category, setCategory] = useState([]);
  const [activeList, setActiveList] = useState(false);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("ყველა");
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  useEffect(() => {
    async function getRequest() {
      try {
        const responseData = await axios.get(
          "http://34.118.255.0:8000/api/store/category/"
        );
        setCategory(responseData.data);
        if (responseData.status >= 200 && responseData.status < 300) {
          console.log("Request was successful");
        }
      } catch (error) {
        window.alert("Sorry, Menu page is not working in this moment :(");
      }
    }
    getRequest();
  }, []);

  useEffect(() => {
    const handleChildrenMenuList = async () => {
      try {
        const response = await axios.get(
          `http://34.118.255.0:8000/api/store/filter/products/?search=${search}`
        );
        if (response.status >= 200 && response.status < 300) {
          setProduct(response.data.results);
          setNext(response.data.next);
          setPrevious(response.data.previous);
        }
      } catch (error) {
        window.alert("product is not available");
      }
    };
    handleChildrenMenuList();
  }, [search]);

  const nextPage = async () => {
    if (!next) return;
    try {
      const response = await axios.get(next);
      setProduct(() => [...response.data.results]);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    } catch (error) {}
  };

  const PrevPage = async () => {
    if (!previous) return;
    try {
      const response = await axios.get(previous);
      setProduct(response.data.results);
      setPrevious(response.data.previous);
      setNext(response.data.next);
    } catch (error) {}
  };
  const [values, setValues] = useState({});
  const handleChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: Math.max(newValue, 10),
    }));
  };

  return (
    <>
      <Header />
      <SecondHeader name={DATA[2]?.[`title_${toggleLang}`]} />
      <Container>
        <div className="Menu">
          <div>
            {
              <Category
                category={category}
                search={search}
                setSearch={setSearch}
                setActiveList={setActiveList}
                activeList={activeList}
              />
            }
          </div>
          <div>
            <Row style={{ paddingTop: "50px" }} className="MenuRow">
              <ListMenu
                product={product}
                handleChange={handleChange}
                values={values}
              />
            </Row>
            <button onClick={nextPage} disabled={!next}>
              {toggleLang === "ka" ? "შემდეგი" : "Next"}
            </button>
            <button onClick={PrevPage} disabled={!previous}>
              {toggleLang === "ka" ? "უკან" : "Previous"}
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Menu;
