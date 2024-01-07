import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/ProductsPage">Products</Link>
                        <Link to="/Cart">Cart</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
