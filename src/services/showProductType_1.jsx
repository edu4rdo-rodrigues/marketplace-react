export default function showProductType_1(product, addToCart) {
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
};