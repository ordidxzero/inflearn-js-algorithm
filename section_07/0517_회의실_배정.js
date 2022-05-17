// 57. 회의실 배정 (section07_08)

const testCase1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

const testCase2 = [
  [3, 3],
  [2, 3],
  [1, 3],
];

function mySolution1(arr) {
  let lastBound = (count = 0);
  const answer = [...arr].sort(([a1, a2], [b1, b2]) => (a2 === b2 ? a1 - b1 : a2 - b2));
  for (const [st, ft] of answer) {
    if (st < lastBound) continue;
    lastBound = ft;
    count += 1;
  }
  return count;
}

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(solution(testCase1));
console.log(solution(testCase2));
