import FilterBadge from '../components/FilterBadge.jsx';
import FilterByName from '../components/FilterByName.jsx';
import FilterByNumericColumn from '../components/FilterByNumericColumn.jsx';
import PlayerTableRow from '../components/PlayerTableRow.jsx';

function Home() {
  return (
    <div className="flex items-start justify-center min-h-screen px-6 py-16">
      <div className="flex flex-col w-full max-w-4xl gap-8">
        <header className="flex flex-col items-center gap-4">
          <FilterByName />

          <FilterByNumericColumn />
        </header>

        <section className="flex gap-2">{/** @todo implements */}</section>

        <table className="table">
          <thead>
            <tr className="table-row">
              <td className="table-cell">Nome</td>
              <td className="table-cell">Nickname</td>
              <td className="table-cell">Vitórias</td>
              <td className="table-cell">Derrotas</td>
              <td className="table-cell">Empates</td>
            </tr>
          </thead>

          <tbody>
            {/* {players.map((player) => (
              <PlayerTableRow key={player.id} player={player} />
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
