import React from 'react';
import MiniCart from './MiniCart';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Arizon E-Commerce</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/products" className="hover:underline">Products</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        <li><MiniCart /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
