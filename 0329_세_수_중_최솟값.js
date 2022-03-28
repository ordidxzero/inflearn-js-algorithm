// 1. 세 수 중 최솟값

const testCase = [2, 5, 1];

function mySolution1(a, b, c) {
  let minValue = a;
  if (b < minValue) minValue = b;
  if (c < minValue) minValue = c;
  return minValue;
}

function mySolution2(a, b, c) {
  return Math.min(a, b, c);
}

function mySolution3(a, b, c) {
  let min = a > b ? b : a;
  return min > c ? c : min;
}

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(mySolution1(...testCase));
console.log(mySolution2(...testCase));
console.log(solution(...testCase));
