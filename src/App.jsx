import PlayersProvider from './contexts/PlayersContext';
import Home from './pages/Home';

function App() {
  return (
    <PlayersProvider>
      <Home />
    </PlayersProvider>
  );
}

export default App;
