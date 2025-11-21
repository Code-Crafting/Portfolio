import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { pagesOptions } from "../constants/pagesOptions";

export const CurrentPageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useLocalStorage(
    "currentPage",
    pagesOptions.infoPages[0].id
  );

  return (
    <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
      {children}
    </CurrentPageContext.Provider>
  );
};
