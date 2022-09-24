const columnsMapper = {
  victories: 'Vitórias',
  defeats: 'Derrotas',
  draws: 'Empates',
};

function FilterByNumericColumn() {
  const validColumns = ['victories', 'defeats', 'draws'];

  function handleFilter(event) {
    event.preventDefault();
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleFilter}>
      <label htmlFor="column-filter">Coluna</label>
      <select id="column-filter" className="text-slate-800">
        {/** @todo implements */}
      </select>

      <label htmlFor="operator-filter">Operador</label>
      <select id="operator-filter" className="text-slate-800">
        <option value="EQUAL">Igual a</option>
        <option value="LESS THAN">Menor que</option>
        <option value="BIGGER THAN">Maior que</option>
      </select>

      <label htmlFor="filter-value">Valor do filtro</label>
      <input id="filter-value" className="w-32" type="number" />

      <button className="button" type="submit">
        Filtrar
      </button>
    </form>
  );
}

export default FilterByNumericColumn;
