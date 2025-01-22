import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [activeListItem, setActiveListItem] = useState(false);
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
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
