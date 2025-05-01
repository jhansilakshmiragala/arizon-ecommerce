import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import ProductDetails from './pages/ProductDetails'; 
import AllProducts from './pages/AllProducts';
import Contact from './pages/Contact';

import FullCartPage from "./pages/FullCartPage";
import CheckoutPage from './pages/CheckoutPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        
        <Route path="/cart" element={<FullCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

