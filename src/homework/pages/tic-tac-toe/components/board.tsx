import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { getWinner, INITIAL_CELLS, PLAYER, type Cells } from '../constants';
import Status from './status';
import Grid from './grid';

function Board() {
  // [상태]
  // 게임 보드 셀(cells, 9개(3 x 3))
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);
  // 게임 순서(order)
  const [order, setOrder] = useState<number>(0);

  // [파생된 상태]
  // 다음 플레이어(Next Player)는?
  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  // 현재 게임 턴에 승리자(Winner)가 있나요?
  const winner = getWinner(cells);

  // [이벤트 핸들러]
  // 게임 진행 함수
  const handlePlay = (index: number) => {
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

  // [파생된 상태]
  // 게임 상태 메시지
  const statusMessage = `넥스트 플레이어 ${nextPlayer}`;

  return (
    <section className={tm('flex flex-col space-y-2 items-center', 'w-60')}>
      <h3 className="sr-only">게임 보드</h3>
      <Status message={statusMessage} />
      <Grid cells={cells} winner={winner} onPlay={handlePlay} />
    </section>
  );
}

export default Board;
