import { createContext, useContext, useState } from "react";

const PanierFavorisContext = createContext();

export const usePanierFavoris = () => {
  return useContext(PanierFavorisContext);
};

export const PanierFavorisProvider = ({ children }) => {
  const [favorisCount, setFavorisCount] = useState(0);
  const [isInFavoris, setIsInFavoris] = useState(false);

//   const handleFavorisChange = () => {
//     setFavorisCount((prevCount) => prevCount + 1);
//   };
const toggleFavoris = () => {
  if (isInFavoris) {
    setFavorisCount(0);
  } else {
    setFavorisCount(1);
  }
  setIsInFavoris(!isInFavoris);
};

const value = {
  favorisCount,
  isInFavoris,
  toggleFavoris,
};

//   const value = {
//     favorisCount,
//     handleFavorisChange,
//   };

  return (
    <PanierFavorisContext.Provider value={value}>
      {children}
    </PanierFavorisContext.Provider>
  );
};
