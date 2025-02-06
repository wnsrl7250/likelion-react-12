// ----------------------------------------------
// 게임 진행을 위한 상수 및 함수
// ----------------------------------------------

/* const INITIAL_CELLS = [null, null, null, null, null, null, null, null, null]; */
export const INITIAL_CELLS = Array(9).fill(null);

export const enum PLAYER {
  ONE = '😎',
  TWO = '🤢',
}

export type Cells = (PLAYER | null)[];

// 게임 승리 조건
const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// 게임 진행 검사 -> 게임 위너 반환 함수
export type Winner = {
  player: PLAYER;
  condition: [number, number, number];
} | null;

export const getWinner = (cells: Cells) => {
  let winner = null;

  // 승리 조건 순환
  for (const [x, y, z] of WINNER_CONDITIONS) {
    const player = cells[x];
    // 승리 조건에 해당하는 위치에 말판이 일치하는 지 검사
    if (player && cells[y] === player && cells[z] === player) {
      winner = {
        player,
        condition: [x, y, z],
      };
      break;
    }
  }

  return winner as Winner;
};
