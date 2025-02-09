import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./Context/ChangeLanguage";
import { BasketProvider } from "./Context/ShowBasket";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/Contact";
import Basket from "./components/Basket/Basket";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);
  const addItemToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]); // Ensure order is updated
  };
  const [product, setProduct] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          order={order}
          setOrder={setOrder}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
    {
      path: "/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "/menu",
      element: (
        <Menu
          order={order}
          setOrder={setOrder}
          product={product}
          setProduct={setProduct}
        />
      ),
    },
    {
      path: "/contactUs",
      element: <ContactUs />,
    },
  ]);

  return (
    <div className="App">
      <LanguageProvider>
        <BasketProvider>
          <RouterProvider router={router} />
        </BasketProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
