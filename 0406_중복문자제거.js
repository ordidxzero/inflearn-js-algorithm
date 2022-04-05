// 16. 중복문자제거

const testCase = "ksekkset";

function mySolution1(str) {
  return str
    .split("")
    .filter((char, index) => str.indexOf(char) === index)
    .join("");
}

function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
