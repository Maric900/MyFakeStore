// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
    const navigate = useNavigate();
    const { cart, resetCart } = useCart(); // Assuming you have a resetCart function

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handlePay = () => {
        // Navigate to the PayingPage
        navigate('/PayingPage', { state: { cart, totalAmount: totalPrice.toFixed(2) } });
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={() => { handlePay(); resetCart(); }}>Pay Now</button>
        </div>
    );
};

export default Cart;




