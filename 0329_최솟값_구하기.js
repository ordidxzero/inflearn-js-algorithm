// 05. 최솟값 구하기

const testCase = [5, 3, 7, 11, 2, 15, 17];

function mySolution1(arr) {
  return Math.min(...arr);
}

function mySolution2(arr) {
  let minValue = arr[0];
  arr.forEach((num) => {
    if (num < minValue) minValue = num;
  });
  return minValue;
}

function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
