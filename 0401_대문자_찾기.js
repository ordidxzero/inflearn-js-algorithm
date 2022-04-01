// 11. 대문자 찾기

const testCase = "KoreaTimeGood";

function mySolution1(str) {
  return str
    .split("")
    .filter((c) => c.charCodeAt() >= 65 && c.charCodeAt() <= 90).length;
}

function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
