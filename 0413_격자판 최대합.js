// 23. 격자판 최대합 (section02_06)

const testCase = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function mySolution1(matrix) {
  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const sumOfRow = matrix.map((row) => sum(row));
  const sumOfColumn = matrix.map((row, ri, arr) => {
    const column = row.map((_, ci) => arr[ri][ci]);
    return sum(column);
  });
  const leftDiagonal = sum(matrix.map((row, i) => row[i]));
  const rightDiagonal = sum(
    matrix.map((row, i) => row[matrix.length - (i + 1)])
  );
  return Math.max(...sumOfRow, ...sumOfColumn, leftDiagonal, rightDiagonal);
}

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
