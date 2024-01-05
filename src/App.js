// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import HamburgerMenu from './HamburgerMenu';
import { CartProvider } from './components/CartContext'; // Import CartProvider
import Layout from './components/Layout'
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <CartProvider>

        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </CartProvider>

      <Footer />
    </Router>
  );
};

export default App;

