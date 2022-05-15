// 56. 좌표 정렬 (section07_07)

const testCase = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

function mySolution1(arr) {
  const answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length - 1; j++) {
      const [a1, a2] = answer[i];
      const [b1, b2] = answer[j];
      if (a1 > b1 || (a1 === b1) & (a2 > b2)) {
        [answer[i], answer[j]] = [answer[j], answer[i]];
      }
    }
  }
  return answer;
}

function mySolution2(arr) {
  return arr.sort(([a1, a2], [b1, b2]) => (a1 - b1 === 0 ? a2 - b2 : a1 - b1));
}

function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
