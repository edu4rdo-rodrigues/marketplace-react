export default function SearchBarAndFilters(props) {
  console.log('prosp search', props);
  

  return (
    <>
        {/* 🔎 Barra de busca e filtros */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="border rounded px-4 py-2 w-full sm:w-60"
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
          />

          <select
            className="border rounded px-4 py-2"
            value={props.category}
            onChange={(e) => props.setCategory(e.target.value)}
          >
            <option>Todos</option>
            <option>Eletrônicos</option>
            <option>Roupas</option>
            <option>Livros</option>
          </select>

          <select
            className="border rounded px-4 py-2"
            value={props.priceRange}
            onChange={(e) => props.setPriceRange(e.target.value)}
          >
            <option value="Todos">Preço (Todos)</option>
            <option value="0-50">Até R$50</option>
            <option value="51-100">R$51–100</option>
            <option value="100+">Acima de R$100</option>
          </select>
        </div>
    </>
  )
}