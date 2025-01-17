import React from "react";
import HeaderItems from "../HeadersItem/HeaderItems";
import { DATA } from "../DATA";
function mobileHeader() {
  return (
    <div className="mobHeader">
      <div className="headerItems">
        {DATA.map((item) => (
          <HeaderItems
            path={item.path}
            id={item.id}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default mobileHeader;
