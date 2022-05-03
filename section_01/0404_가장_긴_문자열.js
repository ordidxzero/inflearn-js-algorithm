// 14. 가장 긴 문자열

const testCase = ["teacher", "time", "student", "beautiful", "good"];

function mySolution1(str) {
  return str.reduce(
    (prev, cur) => (prev.length > cur.length ? prev : cur),
    str[0]
  );
}

function mySolution2(str) {
  let maxLengthString;
  for (const s of str) {
    if (!maxLengthString) maxLengthString = s;
    if (maxLengthString.length < s.length) maxLengthString = s;
  }
  return maxLengthString;
}

function solution(str) {
  return;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
