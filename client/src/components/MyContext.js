import { Children, createContext, useState } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <MyContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
