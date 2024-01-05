// Layout.js
import React from 'react';
import logo from '../logo.svg';
import HamburgerMenu from '../HamburgerMenu';
import App from '../App';


const Layout = ({ children }) => (
    <div className="App">
        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to React store</p>
            <HamburgerMenu />
        </header>
        {children}
    </div>
);

export default Layout;

