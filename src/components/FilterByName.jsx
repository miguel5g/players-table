import { usePlayers } from '../hooks/usePlayers';

function FilterByName() {
  const { filterByName } = usePlayers();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="name-input">Filtrar por nome</label>
      <input type="text" onChange={(event) => filterByName(event.target.value)} />
    </div>
  );
}

export default FilterByName;
