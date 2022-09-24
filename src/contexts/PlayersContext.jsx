import { createContext, useEffect, useState } from 'react';

import { getPlayers } from '../services/players';
import { valueComparator } from '../utils/valueComparator';

const playersContext = createContext();

function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [filters, setFilters] = useState({});

  const filteredPlayers = players.filter(filterMatcher);

  const usedFilters = Object.entries(filters)
    .map(([column, filter]) => ({ column, ...filter }))
    .filter((filter) => !['', null].includes(filter.value));

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  function filterMatcher(player) {
    return Object.entries(filters).every(([key, filter]) => {
      return valueComparator(player[key], filter.value, filter.operator);
    });
  }

  function updateFilter(key, operator, value) {
    setFilters((state) => ({
      ...state,
      [key]: {
        operator,
        value,
      },
    }));
  }

  function filterByName(name) {
    updateFilter('name', 'CONTAINS', name);
  }

  function filterByNumericColumn(column, operator, value) {
    updateFilter(column, operator, value);
  }

  function clearFilter(column) {
    const { operator } = filters[column];

    updateFilter(column, operator, null);
  }

  return (
    <playersContext.Provider
      value={{
        players: filteredPlayers,
        usedFilters,
        clearFilter,
        filterByName,
        filterByNumericColumn,
      }}
    >
      {children}
    </playersContext.Provider>
  );
}

export default PlayersProvider;

export { playersContext };
