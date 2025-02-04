import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./Context/ChangeLanguage";
import { BasketProvider } from "./Context/ShowBasket";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "/menu",
      element: <Menu />,
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
