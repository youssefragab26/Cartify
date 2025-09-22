"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
});
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}