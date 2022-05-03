// 15. 가운데 문자 출력

const testCase1 = "good";
const testCase2 = "study";

function mySolution1(str) {
  if (str.length % 2 === 0) {
    const center = str.length / 2;
    return str[center - 1] + str[center];
  } else {
    const center = Math.floor(str.length / 2);
    return str[center];
  }
}

function solution(str) {
  return;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(solution(testCase1));
console.log(solution(testCase2));
