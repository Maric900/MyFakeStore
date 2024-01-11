// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, resetCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handlePay = () => {
        // Navigate to the PayingPage
        navigate('/PayingPage', { state: { cart, totalAmount: totalPrice.toFixed(2) } });

        // Reset the cart after payment
        resetCart();
    };

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
                </div>
            </div>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <div className="cart-item">
                            <div className="cart-item-details">
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;

