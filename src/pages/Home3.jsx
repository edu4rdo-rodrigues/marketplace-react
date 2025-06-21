import { useState } from 'react';
import { products } from '../products.js';
import products2 from '../data/products2.js'; // você deve ter esse array
import { Link } from 'react-router-dom';
import listOfFiltredProducts from '../services/listOfFilteredProducts.jsx';
import listOfFiltredProductsWithProps from '../services/listOfFiltredProductsWithProps.jsx'
import listOfFiltredProductsWithPropsArray from '../services/listOfFiltredProductsWithPropsArray.jsx'
import listOfFiltredProductsWithPropsObject from '../services/listOfFiltredProductsWithPropsObject.jsx'
import SearchBarAndFilters from '../components/SearchBarAndFilters.jsx';
import ListOfFiltredProducts from '../components/ListOfFiltredProducts.jsx';

export default function Home3() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Todos');
  const [priceRange, setPriceRange] = useState('Todos');
  const propsDescription = 'products2, searchTerm, category, priceRange';

  const Props = [products2, searchTerm, category, priceRange]
  const PropsArray = [products2, searchTerm, category, priceRange, propsDescription]
  const PropsObject = {products2: products2, searchTerm: searchTerm, category: category, priceRange: priceRange}

  return (
    <>
      
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-primary">Produtos</h1>

        {/* 🔎 Barra de busca e filtros */}
        <SearchBarAndFilters 
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          category={category}     setCategory={setCategory}
          priceRange={priceRange} setPriceRange={setPriceRange}
        />

        {/* 🛒 Lista de produtos filtrados */}
        <ListOfFiltredProducts 
          products2={products2} 
          searchTerm={searchTerm} 
          category={category} 
          priceRange={priceRange}
        />
        {listOfFiltredProducts(products2, searchTerm, category, priceRange)}
        {listOfFiltredProductsWithProps(Props)}
        {listOfFiltredProductsWithPropsArray(PropsArray)}
        {listOfFiltredProductsWithPropsObject(PropsObject)}
        
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
