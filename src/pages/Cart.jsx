import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0)
    return (
      <div className="p-10 text-center text-gray-500">
        <p>Seu carrinho está vazio.</p>
      </div>
    );

  return (
    <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Carrinho</h1>
      <ul className="divide-y divide-gray-200">
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between py-4">
            <span className="font-medium text-gray-800">{item.name}</span>
            <span className="font-semibold text-gray-900">R$ {item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center text-xl font-bold text-gray-900">
        <span>Total:</span>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <button
        onClick={() => alert('Simulação de finalização de compra!')}
        className="mt-8 w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
      >
        Finalizar Compra
      </button>
    </main>
  );
}
