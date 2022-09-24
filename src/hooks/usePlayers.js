import { useContext } from 'react';

import { playersContext } from '../contexts/PlayersContext';

function usePlayers() {
  return useContext(playersContext);
}

export { usePlayers };
