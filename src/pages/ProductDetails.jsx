import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log('Fetching product with ID:', productId); 
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        console.log('Fetched product data:', res.data); 
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load product details.');
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div className="text-center mt-8">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  return (
    <div className="my-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">{product.title}</h2>
      <img src={product.image} alt={product.title} className="mx-auto h-60 object-contain mb-4" />
      <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button onClick={() => addToCart(product)} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
