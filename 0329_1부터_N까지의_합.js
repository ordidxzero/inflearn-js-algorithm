// 04. 연필개수

const testCase1 = 6;
const testCase2 = 10;
const testCase3 = 11;

function mySolution1(num) {
  if (num % 2 === 0) {
    return (num * (num + 1)) / 2;
  } else {
    return num + ((num - 1) * num) / 2;
  }
}

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(mySolution1(testCase3));
console.log(solution(testCase1));
console.log(solution(testCase2));
console.log(solution(testCase3));
