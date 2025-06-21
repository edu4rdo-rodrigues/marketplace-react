import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-primary text-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 font-sans">
      <Link to="/" className="text-2xl font-semibold hover:text-secondary transition">
        Marketplace
      </Link>
      <Link to="/carrinho" className="relative hover:text-secondary transition">
        Carrinho
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-secondary text-white rounded-full px-2 text-xs font-semibold">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  
  );
}
