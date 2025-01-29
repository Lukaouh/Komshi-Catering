import React from "react";
import "../Contact-Form/ContactForm.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLanguage } from "../../Context/ChangeLanguage";
export default function ContactForm({ handleSubmited }) {
  const schema = yup.object({
    first_name: yup.string().required("Field is empty"),
    last_name: yup.string().required("Field is empty"),
    mobile: yup.string().required("Field is empty"),
    email: yup.string().email("Email must be valid").required("Field is empty"),
    text: yup.string().required("Field is empty"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { toggleLang } = useLanguage();
  return (
    <>
      <form onSubmit={handleSubmit((data) => handleSubmited(data))}>
        <div className="name" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="first_name">
              {toggleLang === "ka" ? "სახელი" : "Name"}
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder={toggleLang === "ka" ? "სახელი" : "Name"}
              {...register("first_name", {
                required: "Field is empty",
              })}
            ></input>
            {errors.first_name && (
              <p className="error">{errors.first_name.message}</p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="last_name">
              {toggleLang === "ka" ? "გვარი" : "Lastname"}
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              {...register("last_name")}
              placeholder={toggleLang === "ka" ? "გვარი" : "Lastname"}
            ></input>
            {errors.last_name && (
              <p className="error">{errors.last_name.message}</p>
            )}
          </div>
        </div>
        <div className="phone" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="mobile">
              {toggleLang === "ka" ? "ტელ.ნომერი" : "Phone"}
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              {...register("mobile")}
              placeholder={toggleLang === "ka" ? "ტელ.ნომერი" : "Phone"}
            ></input>
            {errors.mobile && <p className="error">{errors.mobile.message}</p>}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">
              {toggleLang === "ka" ? "ელ.ფოსტა" : "Email"}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email")}
              placeholder="komshi@gmail.com"
            ></input>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
        <div
          className="text"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <label htmlFor="text">
            {" "}
            {toggleLang === "ka" ? "ტექსტი" : "Text"}
          </label>
          <textarea
            id="text"
            rows="7"
            cols="40"
            name="text"
            {...register("text", { required: "Field is empty" })}
            placeholder={
              toggleLang === "ka"
                ? "ჩემი აზრი თქვენს შესახებ..."
                : "My feedback..."
            }
          ></textarea>
        </div>
        {errors.text && <p className="error">{errors.text.message}</p>}
        <button type="submit">
          {" "}
          {toggleLang === "ka" ? "გაგზავნა" : "Send"}
        </button>
      </form>
    </>
  );
}
