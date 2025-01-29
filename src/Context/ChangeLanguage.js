import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

// Define the LanguageProvider component
export const LanguageProvider = ({ children }) => {
  const [toggleLang, setToggleLang] = useState(() => {
    const saveLanguage = localStorage.getItem("Lang");
    return saveLanguage ? saveLanguage : "ka";
  });

  const handleChangeLang = () => {
    const newLang = toggleLang === "ka" ? "en" : "ka";
    setToggleLang(newLang);
    localStorage.setItem("Lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ toggleLang, handleChangeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
