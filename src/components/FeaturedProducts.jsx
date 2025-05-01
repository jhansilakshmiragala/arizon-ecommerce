import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom'; 

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching first 4 products from the fake store API
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="my-12 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Featured Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col">
            <Link to={`/product/${product.id}`}> 
              <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            </Link>
            <h3 className="font-medium text-sm mb-2">{product.title}</h3>
            <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="mt-auto bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
