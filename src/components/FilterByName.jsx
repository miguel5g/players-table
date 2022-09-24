import { usePlayers } from '../hooks/usePlayers';

function FilterByName() {
  const { removeFilter, filterByName } = usePlayers();

  function handleChange(event) {
    const { value } = event.target;

    if (value === '') return removeFilter('name');

    filterByName(value);
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="name-input">Filtrar por nome</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default FilterByName;
