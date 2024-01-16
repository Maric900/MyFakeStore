import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PaymentSuccess from './PaymentSuccess';
import './PayingPage.css';

const PayingPage = () => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;

    // State to manage form data and validation
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        zipCode: '',
        address: '',
        cardNumber: '',
        securityNumber: '',
        expiryDate: null,
    });

    // State to manage form validation errors
    const [errors, setErrors] = useState({});

    // State to track payment status
    const [paymentSubmitted, setPaymentSubmitted] = useState(false);

    // Access the navigate function for navigation
    const navigate = useNavigate();

    // Validation function for email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone);
    };

    const isValidCardNumber = (cardNumber) => {
        const cardNumberRegex = /^\d{16}$/;
        return cardNumberRegex.test(cardNumber);
    };

    const isValidSecurityNumber = (securityNumber) => {
        const securityNumberRegex = /^\d{3}$/;
        return securityNumberRegex.test(securityNumber);
    };

    const isValidExpiryDate = (expiryDate) => {
        return expiryDate !== null; // For now, it checks if the date is not null
    };

    // Validation function for checking if the expiry date is expired
    const isExpiredDate = (expiryDate) => {
        const currentDate = new Date();
        return expiryDate < currentDate;
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear validation error for the changed field
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    // Handle date picker change
    const handleDateChange = (date) => {
        // Update form data
        setFormData({
            ...formData,
            expiryDate: date,
        });

        // Clear validation error for the changed field
        setErrors({
            ...errors,
            expiryDate: '',
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation
        const newErrors = {};

        // Example: Validate email format
        if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Example: Validate phone number format
        if (!isValidPhoneNumber(formData.phone)) {
            newErrors.phone = 'Invalid phone number format';
        }

        // Example: Validate card number format
        if (!isValidCardNumber(formData.cardNumber)) {
            newErrors.cardNumber = 'Invalid card number format';
        }

        // Example: Validate security number format
        if (!isValidSecurityNumber(formData.securityNumber)) {
            newErrors.securityNumber = 'Invalid security number format';
        }

        // Example: Validate expiry date format
        if (!isValidExpiryDate(formData.expiryDate)) {
            newErrors.expiryDate = 'Invalid expiry date format';
        } else if (isExpiredDate(formData.expiryDate)) {
            newErrors.expiryDate = 'Card has expired';
        }

        // Update errors state with validation results
        setErrors(newErrors);

        // If there are no validation errors, you can proceed with further actions
        if (Object.keys(newErrors).length === 0) {
            // Perform actions like submitting the form data
            console.log('Form submitted successfully:', formData);

            // Mark payment as submitted
            setPaymentSubmitted(true);
        }
    };

    return (
        <div id="paying-page">
            {!paymentSubmitted ? (
                <div className="form-container">
                    <h2>Total Amount: ${totalAmount}</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>

                        {/* Surname */}
                        <div>
                            <label>Surname:</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleInputChange}
                            />
                            {errors.surname && <p>{errors.surname}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label>Email:</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                            {errors.phone && <p>{errors.phone}</p>}
                        </div>

                        {/* Country */}
                        <div>
                            <label>Country:</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                            {errors.country && <p>{errors.country}</p>}
                        </div>

                        {/* City */}
                        <div>
                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                            {errors.city && <p>{errors.city}</p>}
                        </div>

                        {/* Zip Code */}
                        <div>
                            <label>Zip Code:</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                            />
                            {errors.zipCode && <p>{errors.zipCode}</p>}
                        </div>

                        {/* Address */}
                        <div>
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            {errors.address && <p>{errors.address}</p>}
                        </div>

                        {/* Card Number */}
                        <div>
                            <label>Card Number:</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                            />
                            {errors.cardNumber && <p>{errors.cardNumber}</p>}
                        </div>

                        {/* Security Number */}
                        <div>
                            <label>Security Number:</label>
                            <input
                                type="text"
                                name="securityNumber"
                                value={formData.securityNumber}
                                onChange={handleInputChange}
                            />
                            {errors.securityNumber && <p>{errors.securityNumber}</p>}
                        </div>

                        {/* Expiry Date */}
                        <div>
                            <label>Expiry Date:</label>
                            <DatePicker
                                selected={formData.expiryDate}
                                onChange={handleDateChange}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                            />
                            {errors.expiryDate && <p>{errors.expiryDate}</p>}
                        </div>

                        <button type="submit">Submit Payment</button>
                    </form>
                </div>
            ) : (
                <PaymentSuccess />
            )}
        </div>
    );
};

export default PayingPage;
