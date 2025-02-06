import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { getWinner, INITIAL_CELLS, PLAYER, type Cells } from '../constants';
import Cell from './cell';

function Grid() {
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

  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((cell, index) => {
        let winnerClasses = '';

        // 승리자가 있다면?
        if (winner) {
          // 승리 패턴(공식)에 해당하는 말판에 색칠 공부하기!!
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClasses = 'outline-2 outline-amber-500 bg-amber-500/30';
          }
        }

        return (
          <Cell
            key={index}
            className={winnerClasses}
            onPlay={() => handlePlay(index)}
          >
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}

export default Grid;
