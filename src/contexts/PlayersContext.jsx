import { createContext, useEffect, useState } from 'react';

import { getPlayers } from '../services/players';

const playersContext = createContext();

function PlayersProvider({ children }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  return (
    <playersContext.Provider
      value={{
        players,
      }}
    >
      {children}
    </playersContext.Provider>
  );
}

export default PlayersProvider;

export { playersContext };
