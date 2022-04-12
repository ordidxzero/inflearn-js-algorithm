// 22. 등수 구하기 (section02_05)

const testCase1 = [87, 89, 92, 100, 76];
const testCase2 = [
  87, 89, 87, 89, 87, 89, 87, 89, 92, 92, 92, 100, 100, 100, 100, 76, 70, 76,
];

function mySolution1(score) {
  return score.map(
    (num, _, arr) => arr.filter((other) => num < other).length + 1
  );
}

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));

console.log(solution(testCase1));
console.log(solution(testCase2));
