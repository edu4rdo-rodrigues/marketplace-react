import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products.js';
import products2 from '../data/products2.js';
import { useCart } from '../context/CartContext';
import showProductType_1 from '../services/showProductType_1.jsx'
import showProductType_2 from '../services/showProductType_2.jsx'

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const product2 = products2.find(p => p.id === id);
  const { addToCart } = useCart();

  function showAllTypesProducts() {
    if (product) {
      return showProductType_1(product, addToCart)
    }
    if (product2) {
      return showProductType_2(product2, addToCart)
    }
  };

  return (
    showAllTypesProducts(addToCart, product)
  );

  /*function showProductType_1() {
    return (
      <>
        <div className="p-10 text-center text-gray-500">
          <p>Produto2 não encontrado.</p>
        </div>
        <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-8">R$ {product.price.toFixed(2)}</p>
          <button
            onClick={()=> addToCart(product)} 
            className="px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded font-semibold transition"
          >
            Adicionar ao Carrinho
          </button>
        </main>
      </>
    );
  };*/

  /*function showProductType_2() {
    return (
      <>
        <div className="p-10 text-center text-gray-500">
          <p>Produto1 não encontrado.</p>
        </div>
        <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{product2.name}</h1>
            <p className="text-gray-700 mb-6">{product2.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-8">R$ {product2.price.toFixed(2)}</p>
            <button
              onClick={()=> addToCart(product2)} 
              className="px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded font-semibold transition"
            >
              Adicionar ao Carrinho
            </button>
          </main>
      </>
    );
  };*/

  /*if (product) {
    console.log('exibe o productFound_1');
    return (
      <>
        <div className="p-10 text-center text-gray-500">
          <p>Produto2 não encontrado.</p>
        </div>
        <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-8">R$ {product.price.toFixed(2)}</p>
          <button
            onClick={()=> addToCart(product)} 
            className="px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded font-semibold transition"
          >
            Adicionar ao Carrinho
          </button>
        </main>
      </>
    );
  };*/
  
  /*if (product2) {
    console.log('exibe o productFound_2');
    return (
      <>
        <div className="p-10 text-center text-gray-500">
          <p>Produto1 não encontrado.</p>
        </div>
        <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{product2.name}</h1>
            <p className="text-gray-700 mb-6">{product2.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-8">R$ {product2.price.toFixed(2)}</p>
            <button
              onClick={()=> addToCart(product2)} 
              className="px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded font-semibold transition"
            >
              Adicionar ao Carrinho
            </button>
          </main>
      </>
    );
  };*/
    
  /*function productFound_1() {
    return (
      <>
        <div className="p-10 text-center text-gray-500">
          <p>Produto2 não encontrado.</p>
        </div>
        <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded mb-6"
            loading="lazy"
          />
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-8">R$ {product.price.toFixed(2)}</p>
          <button
            onClick={()=> addToCart(product)} 
            className="px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded font-semibold transition"
          >
            Adicionar ao Carrinho
          </button>
        </main>
      </>
    );
    
  };*/

  /*function productFound_2() {
    return (
      <>
        <div className="p-10 text-center text-gray-500">
          <p>Produto1 não encontrado.</p>
        </div>
        <main className="max-w-4xl mx-auto p-8 bg-white rounded shadow mt-10">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-900">{product2.name}</h1>
            <p className="text-gray-700 mb-6">{product2.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-8">R$ {product2.price.toFixed(2)}</p>
            <button
              onClick={()=> addToCart(product2)} 
              className="px-6 py-3 bg-accent hover:bg-purple-700 text-white rounded font-semibold transition"
            >
              Adicionar ao Carrinho
            </button>
          </main>
      </>
    );
  };*/
}
