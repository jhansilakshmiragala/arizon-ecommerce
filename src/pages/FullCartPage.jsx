import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

const FullCartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingCost = 50;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 px-2 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-right space-y-2 mt-6">
            <p className="text-lg">Subtotal: <strong>₹{subtotal}</strong></p>
            <p className="text-lg">Shipping: <strong>₹{shippingCost}</strong></p>
            <p className="text-xl font-bold">Total: <strong>₹{total}</strong></p>
            <button onClick={() => navigate("/checkout")} className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullCartPage;
