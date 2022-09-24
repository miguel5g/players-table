function PlayerTableRow({player}) {
  return (
    <tr className="table-row">
      <td className="table-cell">{player.name}</td>
      <td className="table-cell">{player.nickname}</td>
      <td className="table-cell">{player.victories}</td>
      <td className="table-cell">{player.defeats}</td>
      <td className="table-cell">{player.draws}</td>
    </tr>
  );
}

export default PlayerTableRow;
