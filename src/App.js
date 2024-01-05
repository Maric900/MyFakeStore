// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import Layout from './components/Layout';
import "./App.css"
import HamburgerMenu from './HamburgerMenu';

function App() {
  return (
    <Router>
      <Layout></Layout>
      <HamburgerMenu></HamburgerMenu>

      <Routes>
        <Route path="/ProductsPage" element={<ProductsPage />} />
      </Routes>

    </Router>
  );
}

export default App;

