// src/context/CartContext.jsx

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

const addToCart = (item) => {
  setCartItems((prev) => {
    const found = prev.find(p => p.id === item.id);

    const updated = found
      ? prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      : [...prev, { ...item, quantity: 1 }];

    console.log("UPDATED CART 👉", updated); // ✅ correct place
    return updated;
  });
};


  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
