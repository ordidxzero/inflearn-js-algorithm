// 29. 가장 짧은 문자거리 (section03_05)

const testCase = "KKHSSSSSSSE";

function mySolution1(s) {
  let count = 1;
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    else {
      answer += s[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }
  return answer;
}

function mySolution2(str) {
  return str
    .match(/(.)\1*/g) // 연속된 문자들끼리 묶어주는 역할을 하는 정규표현식
    .map((c) => (c.length === 1 ? c : `${c[0]}${c.length}`))
    .join("");
}

function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
