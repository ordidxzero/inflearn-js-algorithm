// 09. A를 #으로

const testCase = "BANANA";

function mySolution1(str) {
  return str.replace(/A/gi, "#");
}

function mySolution2(str) {
  let answer = "";
  for (const c of str) {
    if (c === "A") answer += '#';
    else answer += c;
  }
  return answer;
}

function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
