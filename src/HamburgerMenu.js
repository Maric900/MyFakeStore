// HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HamburgerMenu.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <button className="hamburger-button" onClick={toggleMenu}>
                ☰
            </button>
            <div className="menu-items">

                <Link to="/">Home</Link>
                <Link to="/ProductsPage">Products</Link>
                <Link to="/Cart">Cart</Link>
                <Link to="/Help">Help</Link>
            </div>
        </div>
    );
};

export default HamburgerMenu;

