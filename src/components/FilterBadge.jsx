import { FiX } from 'react-icons/fi';

import { usePlayers } from '../hooks/usePlayers';

function FilterBadge({ filter }) {
  const { clearFilter } = usePlayers();

  return (
    <div className="flex gap-1 bg-violet-50 rounded-3xl border border-violet-300 px-2 items-center py-1 text-sm">
      <span>{filter.column}</span>
      <span>{filter.operator}</span>
      <span>{filter.value}</span>
      <button
        type="button"
        className="border border-violet-300 rounded-full p-1 -mr-1 bg-white"
        onClick={() => clearFilter(filter.column)}
      >
        <FiX />
      </button>
    </div>
  );
}

export default FilterBadge;
