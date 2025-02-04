import Board from './components/board';
import History from './components/history';

function TicTacToe() {
  return (
    <article>
      <h2 className="sr-only">틱택토 게임</h2>
      <Board />
      <History />
    </article>
  );
}

export default TicTacToe;
