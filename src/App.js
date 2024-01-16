import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import HamburgerMenu from './components/HamburgerMenu';
import { CartProvider } from './components/CartContext';
import Layout from './components/Layout'
import Footer from './components/Footer';
import PayingPage from './components/PayingPage';
import PaymentSuccess from './components/PaymentSuccess';
import Header from './components/Header';
import ProductDetailsPage from './components/ProductDetailsPage';


const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PayingPage" element={<PayingPage />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/ProductDetailsPage/:id" element={<ProductDetailsPage />} />
        </Routes>
      </CartProvider>

      <Footer />
    </Router>
  );
};

export default App;

