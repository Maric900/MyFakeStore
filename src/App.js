// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import HamburgerMenu from './HamburgerMenu';
import { CartProvider } from './components/CartContext'; // Import CartProvider

const App = () => {
  return (
    <Router>
      <CartProvider>

        <HamburgerMenu />
        <Routes>
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;

