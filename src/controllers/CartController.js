import { useState } from 'react';

export const useCartController = () => {
  const [cart, setCart] = useState([]);

  const handleAddToOrder = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert("¡Venta procesada con éxito para KFE!");
    setCart([]);
  };

  return {
    cart,
    handleAddToOrder,
    handleRemoveItem,
    handleCheckout
  };
};