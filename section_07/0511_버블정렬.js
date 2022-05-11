// 51. 버블정렬 (section07_02)

const testCase = [13, 5, 11, 7, 23, 15];

function mySolution1(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return a;
}

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
