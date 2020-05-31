import React, { useState, useEffect } from 'react';
import CartContext from './cartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    const newCartAmount = cartItems.reduce(
      (total, item) => (total += item.amount),
      0
    );
    setCartAmount(newCartAmount);
  }, [cartAmount, cartItems]);

  const increaseItemAmount = (id, amount) => {
    const newCart = cartItems.map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + amount }
        : { ...item };
    });

    setCartItems(newCart);
  };

  const addToCart = (item, amount) => {
    const cartItem = cartItems.find((el) => el.id === item.id);

    cartItem
      ? increaseItemAmount(item.id, amount)
      : setCartItems([...cartItems, { ...item, amount: amount }]);
  };

  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);

    setCartItems(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartAmount,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
