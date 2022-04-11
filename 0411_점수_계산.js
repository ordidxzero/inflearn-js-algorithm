// 21. 점수 계산 (section02_04)

const testCase1 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
const testCase2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const testCase3 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const testCase4 = [0, 1, 1, 1, 0, 1, 0, 1, 0, 1];

function mySolution1(arr) {
  let totalScore = 0;
  let additional = 0;
  arr.forEach((num) => {
    additional = num === 0 ? 0 : additional + 1; // 0이면 추가점수를 초기화하고, 1이면 추가점수를 누적함
    totalScore += additional;
  });
  return totalScore;
}

function mySolution2(arr) {
  let additional = 0;
  return arr.reduce((prev, cur) => {
    additional = cur === 0 ? 0 : additional + 1;
    return prev + additional;
  }, 0);
}

function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution2(testCase1));
console.log(mySolution1(testCase2));
console.log(mySolution2(testCase2));
console.log(mySolution1(testCase3));
console.log(mySolution2(testCase3));
console.log(mySolution1(testCase4));
console.log(mySolution2(testCase4));
