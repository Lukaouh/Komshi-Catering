import { useState } from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
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
      <SecondHeader name={DATA[3]?.title} />
      <Container>
        {category.map((item) => (
          <div key={item.id} style={{ padding: "5px" }}>
            {!item.children.length ? (
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "none",
                    backgroundColor: "black",
                  }}
                  onClick={() => {
                    handleChildrenMenuList(item.name_ka);
                  }}
                ></button>
                <p>{item.name_ka}</p>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "10px" }}>
                <p>{item.name_ka}</p>
                <button
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "none",
                    backgroundColor: "black",
                  }}
                  onClick={() => {
                    setActiveList(!activeList);
                  }}
                ></button>
              </div>
            )}

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
            ) : null}
          </div>
        ))}

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
      </Container>
      <Footer />
    </>
  );
}

export default Menu;
