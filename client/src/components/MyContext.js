import { createContext, useState } from "react";
import axios, { Axios, AxiosError } from "axios";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Fetching Token
  const getToken = async () => {
    try {
      const token = await axios.get("http://localhost:3001/auth/getToken");
      const tokenData =
        token.data.token[token.data.token.length - 1].accessToken;
      return tokenData;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider value={{ toggleMenu, setToggleMenu, getToken }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
