export const InputsButton = ({ element_id, element, values, handleChange }) => {
  return (
    <div className="lunchPrice">
      <div className="priceInNumber">
        <p>{element.price}₾</p>
      </div>
      <div className="Lunchbuttons">
        <button
          onClick={() =>
            handleChange(
              element_id,
              (values[element_id] ?? element.quantity) - 1,
              element.quantity,
              element.product_description
            )
          }
        >
          -
        </button>
        <input
          type="text"
          value={values[element_id] ?? element.quantity}
          style={{ width: "50px", height: "35px" }}
          onChange={(e) =>
            handleChange(
              element_id,
              Number(e.target.value),
              element.quantity,
              element.product_description
            )
          }
        />
        <button
          onClick={() =>
            handleChange(
              element_id,
              (values[element_id] ?? element.quantity) + 1,
              element.quantity,
              element.product_description
            )
          }
        >
          +
        </button>
      </div>
    </div>
  );
};
