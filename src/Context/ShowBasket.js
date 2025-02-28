import { createContext, useContext, useState } from "react";

const ShowBasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [showBasket, setShowBasket] = useState(false);

  const handleChangeBasket = () => {
    setShowBasket((prevState) => {
      return !prevState;
    });
  };

  return (
    <ShowBasketContext.Provider
      value={{ showBasket, handleChangeBasket, setShowBasket }}
    >
      {children}
    </ShowBasketContext.Provider>
  );
};

export const useScrollBasket = () => {
  const context = useContext(ShowBasketContext);
  return context;
};
