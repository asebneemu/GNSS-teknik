import { createContext, useState, useContext } from "react";

const ActiveNavContext = createContext();

export const useActiveNav = () => useContext(ActiveNavContext);

export const ActiveNavProvider = ({ children }) => {
  const [activeMainPath, setActiveMainPath] = useState(null);      // 🟡 Ana navbar için
  const [activeSecondaryPath, setActiveSecondaryPath] = useState(null);  // 🟢 Alt navbar için

  return (
    <ActiveNavContext.Provider value={{ activeMainPath, setActiveMainPath, activeSecondaryPath, setActiveSecondaryPath }}>
      {children}
    </ActiveNavContext.Provider>
  );
};
