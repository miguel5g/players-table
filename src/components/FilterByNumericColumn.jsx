import { useState } from 'react';
import { usePlayers } from '../hooks/usePlayers';

const columnsMapper = {
  victories: 'Vitórias',
  defeats: 'Derrotas',
  draws: 'Empates',
};

function FilterByNumericColumn() {
  const [column, setColumn] = useState('');
  const [operator, setOperator] = useState('EQUAL');
  const [value, setValue] = useState(0);

  const { filters, filterByNumericColumn } = usePlayers();
  const validColumns = ['victories', 'defeats', 'draws'].filter((validColumn) => {
    return filters[validColumn] === undefined;
  });

  function handleFilter(event) {
    event.preventDefault();

    if (validColumns.length === 0) return;

    const validColumn = column ? column : validColumns[0];

    filterByNumericColumn(validColumn, operator, value);
    setColumn('');
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleFilter}>
      <label htmlFor="column-filter">Coluna</label>
      <select
        id="column-filter"
        className="text-slate-800"
        value={column}
        onChange={(event) => setColumn(event.target.value)}
      >
        {validColumns.map((validColumn) => (
          <option key={validColumn} value={validColumn}>
            {columnsMapper[validColumn]}
          </option>
        ))}
      </select>

      <label htmlFor="operator-filter">Operador</label>
      <select
        id="operator-filter"
        className="text-slate-800"
        value={operator}
        onChange={(event) => setOperator(event.target.value)}
      >
        <option value="EQUAL">Igual a</option>
        <option value="LESS THAN">Menor que</option>
        <option value="BIGGER THAN">Maior que</option>
      </select>

      <label htmlFor="filter-value">Valor do filtro</label>
      <input
        id="filter-value"
        className="w-32"
        type="number"
        value={value}
        onChange={(event) => setValue(+event.target.value)}
      />

      <button className="button" type="submit">
        Filtrar
      </button>
    </form>
  );
}

export default FilterByNumericColumn;
