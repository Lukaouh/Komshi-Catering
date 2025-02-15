import style from "../Contact-Form/CartForm.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLanguage } from "../../Context/ChangeLanguage";
export default function CartForm({ handleSubmited }) {
  const schema = yup.object({
    customer_name: yup.string().required("Field is empty"),
    customer_phone: yup.string().required("Field is empty"),
    customer_email: yup
      .string()
      .email("customer_email must be valid")
      .required("Field is empty"),
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
      <form
        onSubmit={handleSubmit((data) => handleSubmited(data))}
        className="cartForm"
      >
        {" "}
        <div className="customerName">
          <label htmlFor="customer_name">
            {toggleLang === "ka" ? "სახელი" : "Name"}
          </label>
          <input
            type="text"
            id="customer_name"
            name="customer_name"
            placeholder={toggleLang === "ka" ? "სახელი" : "Name"}
            {...register("customer_name")}
          ></input>
          {errors.customer_name && (
            <p className="error">{errors.customer_name.message}</p>
          )}
        </div>
        <div className="customerPhone">
          <label htmlFor="customer_phone">
            {toggleLang === "ka" ? "ტელ.ნომერი" : "Phone"}
          </label>
          <input
            type="text"
            id="customer_phone"
            name="customer_phone"
            {...register("customer_phone")}
            placeholder={toggleLang === "ka" ? "ტელ.ნომერი" : "Phone"}
          ></input>
          {errors.customer_phone && (
            <p className="error">{errors.customer_phone.message}</p>
          )}
        </div>
        <div className="customerEmail">
          <label htmlFor="customer_email">
            {toggleLang === "ka" ? "ელ.ფოსტა" : "Email"}
          </label>
          <input
            type="text"
            id="customer_email"
            name="customer_email"
            {...register("customer_email")}
            placeholder="komshi@gmail.com"
          ></input>
          {errors.customer_email && (
            <p className="error">{errors.customer_email.message}</p>
          )}
        </div>
        <div className="customerText">
          <label htmlFor="text">
            {" "}
            {toggleLang === "ka" ? "ტექსტი" : "Text"}
          </label>
          <textarea
            id="text"
            rows="5"
            cols="33"
            name="text"
            {...register("text", { required: "Field is empty" })}
            placeholder={
              toggleLang === "ka"
                ? " ინფორმაცია შეკვეთის შესახებ"
                : "Detail info about order"
            }
          ></textarea>
        </div>
        {errors.text && <p className="error">{errors.text.message}</p>}
        <div style={{ paddingTop: "20px" }}>
          {" "}
          <button type="submit">
            {" "}
            {toggleLang === "ka" ? "შეკვეთის გაფორმება" : "Processed our order"}
          </button>
        </div>
      </form>
    </>
  );
}
