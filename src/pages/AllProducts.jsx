import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="font-bold">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
