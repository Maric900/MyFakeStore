import React from 'react';
import { useCart } from './CartContext'; // Import useCart

const Cart = () => {
    const { cart } = useCart(); // Use the cart array from CartContext

    // Calculate the total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
        </div>
    );
};

export default Cart;
