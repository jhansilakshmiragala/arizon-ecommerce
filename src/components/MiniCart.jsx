import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const MiniCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log("Cart Items:", cartItems);

  return (
    <div className="mini-cart relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative"
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-lg p-4 text-black">
          <h3 className="font-semibold mb-2">Cart Items</h3>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-2 max-h-48 overflow-auto">
                {cartItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center">
                    <span className="text-sm">{item.title || "No Title"}</span>
                    <span className="text-sm">x{item.quantity || 1}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs ml-2"
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
                <button disabled className="mt-2 w-full bg-gray-300 text-gray-600 py-1 rounded cursor-not-allowed">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;
