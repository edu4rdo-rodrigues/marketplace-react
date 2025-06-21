import { useState } from 'react';
import { products } from '../products.js';
import products2 from '../data/products2.js'; // você deve ter esse array
import { Link } from 'react-router-dom';
import listOfFiltredProducts from '../services/listOfFilteredProducts.jsx';
import listOfFiltredProductsWithProps from '../services/listOfFiltredProductsWithProps.jsx'

export default function Home3() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Todos');
  const [priceRange, setPriceRange] = useState('Todos');

  const Props = [products2, searchTerm, category, priceRange]

  return (
    <>
      
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-primary">Produtos</h1>

        {/* 🔎 Barra de busca e filtros */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="border rounded px-4 py-2 w-full sm:w-60"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border rounded px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Todos</option>
            <option>Eletrônicos</option>
            <option>Roupas</option>
            <option>Livros</option>
          </select>

          <select
            className="border rounded px-4 py-2"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="Todos">Preço (Todos)</option>
            <option value="0-50">Até R$50</option>
            <option value="51-100">R$51–100</option>
            <option value="100+">Acima de R$100</option>
          </select>
        </div>

        {/* 🛒 Lista de produtos filtrados */}
        {listOfFiltredProducts(products2, searchTerm, category, priceRange)}
        {listOfFiltredProductsWithProps(Props)}
        
      </div>
      <main className="max-w-7xl mx-auto px-4 py-10">
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
    </>
  );
}
