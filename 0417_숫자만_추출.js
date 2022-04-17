// 27. 숫자만 추출 (section03_03)

const testCase = "g0en2T0s8eSoft";

function mySolution1(s) {
  const chars = s.split("");
  const number = chars
    .filter((c) => c.charCodeAt() >= 48 && c.charCodeAt() <= 57)
    .join("");
  return +number;
}

function mySolution2(s) {
  return +s.match(/[0-9]/g).join("");
}

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
