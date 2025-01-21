import React from "react";
import "../Contact-Form/ContactForm.css";
export default function ContactForm({ handleChange, values, handlClick }) {
  return (
    <>
      <form onSubmit={handlClick}>
        <div className="name" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="first_name">სახელი</label>
            <input
              type="text"
              id="first_name"
              value={values.first_name}
              name="first_name"
              onChange={(event) => handleChange(event)}
              placeholder="დავით"
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="last_name">გვარი</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={values.last_name}
              onChange={(event) => handleChange(event)}
              placeholder="გვარიშვილი"
            ></input>
          </div>
        </div>
        <div className="phone" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="mobile">ტელ.ნომერი</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              // value={values.mobile}
              onChange={(event) => handleChange(event)}
              placeholder="555 123 456"
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">ელ.ფოსტა</label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={(event) => handleChange(event)}
              placeholder="komshi@gmail.com"
            ></input>
          </div>
        </div>
        <div
          className="text"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="text">ტექსტი</label>
          <textarea
            id="text"
            rows="7"
            cols="40"
            name="text"
            value={values.text}
            onChange={(event) => handleChange(event)}
            placeholder="ჩემი აზრი თქვენს შესახებ..."
          ></textarea>
        </div>
        <button>გაგზავნა</button>
      </form>
    </>
  );
}
