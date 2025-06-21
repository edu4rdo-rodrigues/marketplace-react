import { useState } from 'react';
import products2 from '../data/products2.js'; // você deve ter esse array
import { Link } from 'react-router-dom';

export default function Home2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Todos');
  const [priceRange, setPriceRange] = useState('Todos');

  // 🔍 Filtragem
  const filteredProducts = products2.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'Todos' || product.category === category;
    const matchesPrice =
      priceRange === 'Todos' ||
      (priceRange === '0-50' && product.price <= 50) ||
      (priceRange === '51-100' && product.price > 50 && product.price <= 100) ||
      (priceRange === '100+' && product.price > 100);

    return matchesName && matchesCategory && matchesPrice;
  });

  return (
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
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/produto/${product.id}`}
            //className="border rounded p-4 bg-white shadow hover:shadow-lg transition"
          >
            <div
              key={product.id}
              className="border rounded p-4 bg-white shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-secondary font-bold">R${product.price}</p>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  );
}
