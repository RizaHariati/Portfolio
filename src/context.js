import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [projectMenu, setProjectMenu] = useState(false);

  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProject = useRef(null);

  const homeOn = () => {
    setProjectMenu(false);
    refHome.current.style.fontWeight = "700";
    refAbout.current.style.fontWeight = "300";
    refProject.current.style.fontWeight = "300";
  };

  const projectOn = () => {
    setProjectMenu(true);
    refProject.current.style.fontWeight = "700";
    refHome.current.style.fontWeight = "300";
    refAbout.current.style.fontWeight = "300";
  };
  const aboutOn = () => {
    setProjectMenu(false);
    refHome.current.style.fontWeight = "300";
    refAbout.current.style.fontWeight = "700";
    refProject.current.style.fontWeight = "300";
  };
  return (
    <AppContext.Provider
      value={{
        projectMenu,
        refHome,
        refAbout,
        refProject,
        homeOn,
        aboutOn,
        projectOn,
        setProjectMenu,
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
