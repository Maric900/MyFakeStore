import React, { createContext, useContext, useState, useCallback } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    // Function to remove one instance of an item from the cart
    const removeFromCart = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            // Create a copy of the cart
            const updatedCart = [...cart];

            // Remove one instance of the item
            updatedCart.splice(itemIndex, 1);

            // Update the cart state
            setCart(updatedCart);
        }
    };

    // Function to reset the cart
    const resetCart = () => {
        setCart([]);
    };

    // Memoize the context value to avoid unnecessary re-renders
    const contextValue = useCallback(
        {
            cart,
            addToCart,
            removeFromCart,
            resetCart,
        },
        [cart]
    );

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
