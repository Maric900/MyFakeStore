import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);

        if (itemIndex !== -1) {
            console.log('Removing item:', itemId);
            const updatedCart = [...cart];

            // Remove one instance of the item
            updatedCart.splice(itemIndex, 1);

            console.log('Updated Cart:', updatedCart);

            // Update the cart state
            setCart(updatedCart);
        } else {
            console.warn('Item not found in cart:', itemId);
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
