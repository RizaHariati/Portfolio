import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark-mode");
  const refHome = useRef(null);
  const refAbout = useRef(null);

  const toggleMode = (e) => {
    e.preventDefault();

    if (theme === "dark-mode") {
      setTheme("light-mode");
      e.target.style.left = "50%";
    } else {
      setTheme("dark-mode");
      e.target.style.left = "0";
    }
    document.documentElement.classList = theme;
  };
  const homeOn = () => {
    refHome.current.style.fontWeight = "600";
    refAbout.current.style.fontWeight = "300";
  };

  const aboutOn = () => {
    refHome.current.style.fontWeight = "300";
    refAbout.current.style.fontWeight = "600";
  };
  return (
    <AppContext.Provider
      value={{
        toggleMode,
        refHome,
        refAbout,
        homeOn,
        aboutOn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
