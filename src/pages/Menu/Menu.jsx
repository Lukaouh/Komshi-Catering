import { useState } from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Menu() {
  const [category, setCategory] = useState([]);
  const [activeList, setActiveList] = useState(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      async function getRequest() {
        const responseData = await axios.get(
          "http://34.118.255.0:8000/api/store/category/"
        );
        setCategory(responseData.data);
        console.log(responseData.data);
        if (responseData.status >= 200 && responseData.status < 300) {
          console.log("Request was successful");
        }
      }
      getRequest();
    } catch (error) {
      window.alert("Sorry, Menu page is not working in this moment :(");
    }
  }, []);

  const handleChildrenMenuList = async (name) => {
    try {
      const response = await axios.get(
        `http://34.118.255.0:8000/api/store/filter/products/?search=${name}`
      );
      if (response.status >= 200 && response.status < 300) {
        setProduct(response.data.results);
        console.log(response.data.results);
      }
    } catch (error) {
      window.alert("product is not available");
    }
  };

  return (
    <>
      <Header />
      <SecondHeader name={DATA[2]?.title} />
      <Container>
        <div className="categoryPara">
          <h4>კატეგორიები</h4>
        </div>

        <div className="Menu">
          <div className="CategoryList">
            {category.map((item) => (
              <div key={item.id} className="categoryItem">
                {!item.children.length ? (
                  <div className="noChildre">
                    <button
                      onClick={() => {
                        handleChildrenMenuList(item.name_ka);
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
                            handleChildrenMenuList(child.name_ka);
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

          <div>
            {product.map((element, index) => (
              <div id={index}>
                <img
                  src={element.image}
                  style={{ width: "200px", height: "300px" }}
                  alt="partnerLogos"
                />
                <h1>სახელი : {element.name_ka}</h1>
                <h1>ფასი : {element.price}</h1>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Menu;
