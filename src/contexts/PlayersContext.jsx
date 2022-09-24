import { createContext, useEffect, useState } from 'react';

import { getPlayers } from '../services/players';
import { valueComparator } from '../utils/valueComparator';

const playersContext = createContext();

function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [filters, setFilters] = useState({});

  const filteredPlayers = players.filter((player) => {
    return Object.entries(filters).every(([column, filter]) => {
      return valueComparator(player[column], filter.value, filter.operator);
    });
  });

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  useEffect(() => {
    console.log(filteredPlayers);
  });

  function filterByName(name) {
    setFilters({
      ...filters,
      name: {
        operator: 'CONTAINS',
        value: name,
      },
    });
  }

  function filterByNumericColumn(column, operator, value) {
    setFilters({
      ...filters,
      [column]: {
        operator,
        value,
      },
    });
  }

  function removeFilter(column) {
    const newFilters = {};

    Object.entries(filters).forEach(([currentColumn, filter]) => {
      if (currentColumn === column) return;

      newFilters[currentColumn] = filter;
    });

    setFilters(newFilters);
  }

  return (
    <playersContext.Provider
      value={{
        players: filteredPlayers,
        filters,
        filterByName,
        filterByNumericColumn,
        removeFilter,
      }}
    >
      {children}
    </playersContext.Provider>
  );
}

export default PlayersProvider; // import PlayersProvider from '...'

export { playersContext }; // import { pl } from '...'
