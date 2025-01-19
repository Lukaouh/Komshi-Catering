import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import "../header.css";
function HeaderItems(props) {
  const { pathname } = useLocation();
  return (
    <div>
      <nav>
        <ul>
          <Link to={props.path} key={props.id}>
            <li
              className={`title ${pathname === props.path ? "active" : ""}`}
              key={props.id}
            >
              {props.title}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderItems;
