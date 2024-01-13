// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, resetCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const handleRemoveAll = () => {
        // Remove all items from the cart
        resetCart();
    };

    const handlePay = () => {
        // Navigate to the PayingPage
        navigate('/PayingPage', { state: { cart, totalAmount: totalPrice.toFixed(2) } });

        // Reset the cart after payment
        resetCart();
    };

    // Group items by product title and calculate total quantity for each product
    const groupedCart = cart.reduce((grouped, item) => {
        const existingItem = grouped.find((group) => group.title === item.title);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            grouped.push({
                title: item.title,
                quantity: 1,
                id: item.id, // Add the id field if available
            });
        }

        return grouped;
    }, []);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Shopping Cart</h2>
                <div className="cart-summary">
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    {/* Conditionally render the "Pay Now" button */}
                    {totalPrice > 0 && (
                        <button onClick={handlePay}>Pay Now</button>
                    )}
                    <button onClick={handleRemoveAll}>Remove All</button>
                </div>
            </div>
            <ul>
                {groupedCart.map((group) => (
                    <li key={group.id}>
                        <div className="cart-item">
                            <div className="cart-item-details">
                                <p>{group.title}</p>
                                <p>Quantity: {group.quantity}</p>
                            </div>
                            <button onClick={() => handleRemove(group.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
