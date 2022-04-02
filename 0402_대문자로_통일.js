// 12. 대문자로 통일

const testCase = "ItisTimeToStudy";

function mySolution1(str) {
  return str.toUpperCase();
}

function mySolution2(str) {
  return str
    .split("")
    .map((c) =>
      c === c.toUpperCase() ? c : String.fromCharCode(c.charCodeAt() - 32)
    )
    .join("");
}

function solution(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
