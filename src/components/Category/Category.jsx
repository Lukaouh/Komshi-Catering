import React, { useState } from "react";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faBasketShopping,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../Context/ChangeLanguage";
import { Container } from "react-bootstrap";

export default function Category({
  category,
  search,
  setSearch,
  activeList,
  setActiveList,
}) {
  const { toggleLang } = useLanguage();
  const [activeCategories, setActiveCategoies] = useState(true);
  return (
    <Container>
      <div className="menuleftSide">
        <div className="categoryPara">
          <h4>{toggleLang === "ka" ? "კატეგორიები" : "Categories"}</h4>
          <FontAwesomeIcon
            icon={faBars}
            className="burgerCategory"
            style={{ width: "20px", height: "40px", color: "white" }}
            onClick={() => {
              setActiveCategoies(!activeCategories);
            }}
          />
        </div>
        <div
          className={activeCategories ? "hidden CategoryList" : "CategoryList"}
        >
          {category.map((item) => (
            <div key={item.id} className="categoryItem">
              {!item.children.length ? (
                <div className="noChildren">
                  <button
                    onClick={() => {
                      setSearch(item.name_ka);
                    }}
                    style={{
                      backgroundColor:
                        search === item.name_ka
                          ? " rgba(107, 170, 169, 1)"
                          : "",
                    }}
                  ></button>
                  <p>{item[`name_${toggleLang}`]}</p>
                </div>
              ) : (
                <div className="hasChildren">
                  <p>{item[`name_${toggleLang}`]}</p>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setActiveList(!activeList);
                    }}
                  >
                    {activeList ? (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        style={{ color: "grey" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ color: "grey" }}
                      />
                    )}
                  </a>
                </div>
              )}

              {activeList ? (
                <ul style={{ listStyle: "none" }}>
                  {item.children.map((child) => (
                    <div
                      key={child.id}
                      style={{ display: "flex", paddingBottom: "5px" }}
                      className="category_Children"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSearch(child.name_ka);
                        }}
                        style={{
                          backgroundColor:
                            search === child.name_ka
                              ? " rgba(107, 170, 169, 1)"
                              : "",
                        }}
                      ></button>
                      <li>{child[`name_${toggleLang}`]}</li>
                    </div>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
