// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <footer className="header">
            <div className="container">
                <div className="header-content">

                    <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/ProductsPage">Products</Link>
                        <Link to="/Cart">Cart</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Header;
