import React from 'react';
import { products } from '../products.js';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-poppings font-bold text-primary mb-8">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/produto/${product.id}`}
            className="block border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
              <p className="mt-2 text-sm text-gray-600 truncate">{product.description}</p>
              <p className="mt-4 text-xl font-bold text-blue-600">R$ {product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
