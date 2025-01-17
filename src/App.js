import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
} from "react-router-dom";
import Header from "./components/headers/Header";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/Contact";
import Lunch from "./pages/Lunch/Lunch";
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
    {
      path: "/lunch",
      element: <Lunch />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
