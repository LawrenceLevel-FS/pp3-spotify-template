import { createContext, useState } from "react";
import axios from "axios";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Fetching Token
  const getToken = async () => {
    try {
      const token = await axios.get("http://localhost:3001/auth/getToken");
      const tokenData = token.data.token[0].accessToken;

      return tokenData;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MyContext.Provider value={{ toggleMenu, setToggleMenu, getToken }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
