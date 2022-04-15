// 26. 유효한 팰린드롬 (section03_02)

const testCase = "found7, time: study; Yduts; emit, 7Dnuof";

function mySolution1(s) {
  const str = s.toLowerCase().replace(/[^a-z]/g, "");
  if (str.length === 0 || str.length === 1) return "YES";
  return str.split("").reverse().join("") === str ? "YES" : "NO";
}

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
