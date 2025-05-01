import React from 'react';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <>
      <div className="text-center mt-10">
        <h2 className="text-3xl font-semibold">Welcome to Arizon E-Commerce 🛍️</h2>
        <p className="mt-4 text-gray-600">Shop smart, shop easy, shop Arizon!</p>
      </div>
      <FeaturedProducts />
    </>
  );
};

export default Home;
