// 58. 결혼식 (section07_09)

const testCase = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

const a = [
  [5, 14],
  [12, 15],
  [14, 18],
  [15, 20],
  [20, 30],
];

function mySolution1(arr) {
  let lastBound = 72;
  let answer = (count = 0);
  const participants = [...arr].sort(([a1, a2], [b1, b2]) => (a1 === b1 ? a2 - b2 : a1 - b1));
  for (const [st, ft] of participants) {
    if (st < lastBound) {
      lastBound = lastBound < ft ? lastBound : ft;
      count++;
    } else {
      count = 1;
    }
    answer = count >= answer ? count : answer;
  }
  return answer;
}

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
