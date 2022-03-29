// 03. 연필개수

const testCase1 = 25;
const testCase2 = 178;

function mySolution1(people) {
  return Math.ceil(people / 12);
}

function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(solution(testCase1));
console.log(solution(testCase2));
