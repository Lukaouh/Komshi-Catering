import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./Context/ChangeLanguage";
import { BasketProvider } from "./Context/ShowBasket";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/Contact";
import Cart from "./pages/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const [values, setValues] = useState({});
  const [quantity, setQuantity] = useState();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          order={order}
          setOrder={setOrder}
          product={product}
          setProduct={setProduct}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ),
    },
    {
      path: "/aboutUs",
      element: <AboutUs order={order} setOrder={setOrder} />,
    },
    {
      path: "/menu",
      element: (
        <Menu
          order={order}
          setOrder={setOrder}
          product={product}
          setProduct={setProduct}
          values={values}
          setValues={setValues}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ),
    },
    {
      path: "/contactUs",
      element: <ContactUs order={order} setOrder={setOrder} />,
    },
    {
      path: "/cart",
      element: (
        <Cart
          order={order}
          setOrder={setOrder}
          product={product}
          values={values}
          setValues={setValues}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      ),
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
