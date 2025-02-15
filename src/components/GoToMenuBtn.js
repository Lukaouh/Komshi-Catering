import React from "react";
import { useNavigate } from "react-router-dom";
function GoToMenuBtn({ toggleLang }) {
  const navigate = useNavigate();
  const MenuBtn = () => {
    navigate("/menu");
  };
  return (
    <div style={{ paddingTop: "50px" }}>
      <button className="fullMenu" onClick={MenuBtn}>
        {toggleLang === "ka" ? "ყველა პროდუქტი" : "All Product"}
      </button>
    </div>
  );
}

export default GoToMenuBtn;
