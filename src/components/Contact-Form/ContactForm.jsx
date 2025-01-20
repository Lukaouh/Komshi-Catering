import React from "react";
import "../Contact-Form/ContactForm.css";
export default function ContactForm({ handleChange, values, handlClick }) {
  return (
    <>
      <form onSubmit={handlClick}>
        <div className="name" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">სახელი</label>
            <input
              type="text"
              id="name"
              value={values.name}
              name="name"
              onChange={(event) => handleChange(event)}
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="surname">გვარი</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={values.surname}
              onChange={(event) => handleChange(event)}
            ></input>
          </div>
        </div>
        <div className="phone" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="phone">ტელ.ნომერი</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={(event) => handleChange(event)}
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
          ></textarea>
        </div>
        <button>გაგზავნა</button>
      </form>
    </>
  );
}
