// PaymentSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    // Redirect to the Cart page after a successful payment
    const redirectToCart = () => {
        navigate('/cart'); // Adjust the path to your Cart component route
    };

    return (
        <div>
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase.</p>
            <button onClick={redirectToCart}>Go to Cart</button>
        </div>
    );
};

export default PaymentSuccess;
