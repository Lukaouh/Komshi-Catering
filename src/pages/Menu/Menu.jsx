import { useState } from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Menu() {
  const [category, setCategory] = useState([]);
  const [activeList, setActiveList] = useState(false);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("ყველა");

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
        }
      } catch (error) {
        window.alert("product is not available");
      }
    };
    handleChildrenMenuList();
  }, [search]);

  const [values, setValues] = useState({});
  const handleChange = (id, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: Math.max(newValue, 10),
    }));
  };
  console.log(search);
  return (
    <>
      <Header />
      <SecondHeader name={DATA[2]?.title} />
      <Container>
        <div className="Menu">
          <div className="menuleftSide">
            <div className="categoryPara">
              <h4>კატეგორიები</h4>
            </div>
            <div className="CategoryList">
              {category.map((item) => (
                <div key={item.id} className="categoryItem">
                  {!item.children.length ? (
                    <div className="noChildre">
                      <button
                        onClick={() => {
                          setSearch(item.name_ka);
                        }}
                      ></button>
                      <p>{item.name_ka}</p>
                    </div>
                  ) : (
                    <div className="hasChildren">
                      <p>{item.name_ka}</p>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setActiveList(!activeList);
                        }}
                      >
                        {activeList ? (
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            style={{ color: "grey" }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ color: "grey" }}
                          />
                        )}
                      </a>
                    </div>
                  )}

                  {activeList ? (
                    <ul style={{ listStyle: "none" }}>
                      {item.children.map((child) => (
                        <div
                          key={child.id}
                          style={{ display: "flex", paddingBottom: "5px" }}
                          className="category_Childre"
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setSearch(child.name_ka);
                            }}
                          ></button>
                          <li>{child.name_ka}</li>
                        </div>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Row style={{ paddingTop: "50px", paddingLeft: "50px" }}>
              {product.map((element, index) => (
                <Col
                  lg={6}
                  xl={4}
                  key={element.id}
                  style={{ paddingTop: "10px" }}
                  className="h-100"
                >
                  <div className="lunchBox">
                    <img src={element.image} />
                    <div className="Itemh4">
                      <h4 className="cardTitle">{element.name_ka}</h4>
                    </div>
                    <div className="lunchPrice">
                      <p> {element.price}₾</p>
                      <div className="Lunchbuttons">
                        {" "}
                        <button
                          onClick={() =>
                            handleChange(
                              element.id,
                              (values[element.id] || 10) - 1
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          style={{ width: "50px", height: "35px" }}
                          value={values[element.id] || 10}
                          onChange={(e) =>
                            handleChange(element.id, Number(e.target.value))
                          }
                        />
                        <button
                          onClick={() =>
                            handleChange(
                              element.id,
                              (values[element.id] || 0) + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Menu;
