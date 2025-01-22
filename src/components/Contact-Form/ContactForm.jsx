import React from "react";
import "../Contact-Form/ContactForm.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { text } from "@fortawesome/fontawesome-svg-core";
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

  return (
    <>
      <form onSubmit={handleSubmit((data) => handleSubmited(data))}>
        <div className="name" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="first_name">სახელი</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="სახელი"
              {...register("first_name", {
                required: "Field is empty",
              })}
            ></input>
            {errors.first_name && (
              <p className="error">{errors.first_name.message}</p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="last_name">გვარი</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              {...register("last_name")}
              placeholder="გვარი"
            ></input>
            {errors.last_name && (
              <p className="error">{errors.last_name.message}</p>
            )}
          </div>
        </div>
        <div className="phone" style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="mobile">ტელ.ნომერი</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              {...register("mobile")}
              placeholder="555 123 456"
            ></input>
            {errors.mobile && <p className="error">{errors.mobile.message}</p>}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">ელ.ფოსტა</label>
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
          <label htmlFor="text">ტექსტი</label>
          <textarea
            id="text"
            rows="7"
            cols="40"
            name="text"
            {...register("text", { required: "Field is empty" })}
            placeholder="ჩემი აზრი თქვენს შესახებ..."
          ></textarea>
        </div>
        {errors.text && <p className="error">{errors.text.message}</p>}
        <button type="submit">გაგზავნა</button>
      </form>
    </>
  );
}
