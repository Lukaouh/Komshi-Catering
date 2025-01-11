import React from "react";

import { DataService } from "./DataServices";
import "./Service.css";

function Services() {
  return (
    <div className="container">
      <div></div>
      <div className="service ">
        {DataService.map((item) => (
          <div
            className={item.active ? "coloredBack components" : "components"}
            key={item.id}
          >
            <img src={item.image} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
