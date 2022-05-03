// 10. 문자 찾기

const testCase = ["COMPUTERPROGRAMMING", "R"];

function mySolution1(str, char) {
  return str.split("").filter((c) => c === char).length;
}

function mySolution2(str, char) {
  let count = 0;
  for (const c of str) {
    if (c === char) count += 1;
  }
  return count;
}

function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(mySolution2(...testCase));
console.log(solution(...testCase));
