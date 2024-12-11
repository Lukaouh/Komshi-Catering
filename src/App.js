import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/headers/Header";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import ContactUs from "./pages/ContactUs/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
