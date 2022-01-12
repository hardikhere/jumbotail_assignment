import React from "react";
import { getBooksReducer, initialBooksState } from "./getSearchResultsReducer";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [globalState, dispatch] = React.useReducer(
    getBooksReducer,
    initialBooksState
  );
  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
