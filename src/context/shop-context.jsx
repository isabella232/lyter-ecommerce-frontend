import React, { createContext } from "react";
import data from "../DummyData/data";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {}
  for(let i = 1; i < data.length; i++)
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};
