import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import Board from './components/board';
import History from './components/history';
import {
  getNextPlayer,
  getStatusMessage,
  getWinner,
  INITIAL_CELLS,
  type Cells,
} from './constants';

function TicTacToe() {
  // [상태]
  // 게임 보드 셀(cells, 9개(3 x 3))
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);

  // [상태]
  // 게임 순서(order)
  const [order, setOrder] = useState<number>(0);

  // [파생된 상태]
  // 다음 플레이어
  const nextPlayer = getNextPlayer(order);

  // [파생된 상태]
  // 게임 승자 정보
  const winner = getWinner(cells);

  // [파생된 상태]
  // 게임 상태 메시지
  const statusMessage = getStatusMessage(nextPlayer, winner, cells);

  // [이벤트 핸들러]
  // 게임 진행 함수
  const handlePlayGame = (index: number) => {
    // 승리자가 있다면 게임 오버(GAME OVER)
    if (winner) {
      // 알림(notification)
      alert(`GAME OVER!\nWinner ${winner.player}`);
      return;
    }

    // 승리자가 없다면 게임 진행 계속

    // 게임 상태 업데이트 (순서)
    const nextOrder = order + 1;
    setOrder(nextOrder);

    // 게임 상태 업데이트 (게임 보드 셀)
    const nextCells = cells.map((cell, i) => (index !== i ? cell : nextPlayer));
    setCells(nextCells);
  };

  // [이벤트 핸들러]
  // 게임 초기화 함수
  const handleReGame = () => {
    // 게임 운영에 사용되는 상태 초기화 (리셋, 리-게임)
    setCells(INITIAL_CELLS);
    setOrder(0);
  };

  return (
    <article className={tm('flex space-x-5 justify-center', 'mt-10')}>
      <h2 className="sr-only">틱택토 게임</h2>
      <Board
        cells={cells}
        winner={winner}
        statusMessage={statusMessage}
        onPlayGame={handlePlayGame}
        onReGame={handleReGame}
      />
      <History count={order} />
    </article>
  );
}

export default TicTacToe;
