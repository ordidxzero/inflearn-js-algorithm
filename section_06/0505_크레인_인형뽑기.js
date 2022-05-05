// 45. 크레인 인형뽑기 (section06_03)

const testCase = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
];

function mySolution1(board, moves) {
  let count = 0;
  const stack = [];
  for (const column of moves) {
    for (let i = 0; i < board.length; i++) {
      const selected = board[i][column - 1];
      board[i][column - 1] = 0;
      if (selected === 0) continue;
      if (selected === stack[stack.length - 1]) {
        stack.pop();
        count += 2;
      } else stack.push(selected);
      break;
    }
  }
  return count;
}

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}

console.log(mySolution1(...testCase));
console.log(solution(...testCase));
