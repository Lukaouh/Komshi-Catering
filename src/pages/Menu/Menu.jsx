import React, { useState } from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import ContactForm from "../../components/Contact-Form/ContactForm";
import { useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
function Menu() {
  const [categori, setCategori] = useState([]);
  const [activeList, setActiveList] = useState(false);
  useEffect(() => {
    try {
      async function getRequest() {
        const responseData = await axios.get(
          "http://34.118.255.0:8000/api/store/category/"
        );
        setCategori(responseData.data);
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
        `http://34.118.255.0:8000/api/store/products/${name}`
      );
      if (response.status >= 200 && response.status < 300) {
        console.log("Request was successful");
      }
    } catch (error) {
      window.alert("product is not available");
    }
  };

  return (
    <>
      <Header />
      <SecondHeader name={DATA[3]?.title} />
      <Container>
        {categori.map((item) => (
          <div key={item.id}>
            <p>{item.name_ka}</p>
            {item.children.length ? (
              <button
                onClick={() => {
                  setActiveList(!activeList);
                }}
              >
                x
              </button>
            ) : null}
            {activeList ? (
              <ul style={{ listStyle: "none" }}>
                {item.children.map((child) => (
                  <div
                    key={child.id}
                    style={{ display: "flex", paddingBottom: "5px" }}
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
            ) : (
              ""
            )}
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Menu;
