// HamburgerMenu.js
import React, { useState } from 'react';

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
                {/* Add your menu items here */}
                <a href="/">Home</a>
                <a href="/ProductsPage">Products</a>
                <a href="/men">Men</a>
                <a href="/women">Women</a>
            </div>
        </div>
    );
};

export default HamburgerMenu;
