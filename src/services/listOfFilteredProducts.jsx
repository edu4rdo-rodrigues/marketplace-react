import { Link } from "react-router-dom";

export default function listOfFiltredProducts(products2, searchTerm, category, priceRange) {
  
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
    <>
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
    </>
  )
}