import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Layout = ({ children }) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to React store</p>      <Link to="/ProductsPage">
                <button className="bottom-button">Go to Products</button>
            </Link>
        </header>
        {children}
        <footer className="App-footer">

        </footer>
    </div>
);

export default Layout;

