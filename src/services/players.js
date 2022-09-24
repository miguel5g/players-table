const BASE_URL = 'http://localhost:4000';

async function getPlayers() {
  const playersEndpoint = `${BASE_URL}/players`;

  return fetch(playersEndpoint).then((response) => response.json());
}

export { getPlayers };
