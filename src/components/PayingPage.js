// PayingPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const PayingPage = () => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0; // Use 0 as a default value if not provided

    return (
        <div>
            <h2>Total Amount:</h2>
            <p>${totalAmount}</p>
            {/* Your form goes here */}
            <form>
                {/* Form fields go here */}
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PayingPage;



