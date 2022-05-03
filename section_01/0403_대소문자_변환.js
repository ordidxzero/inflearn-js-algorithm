// 13. 대소문자 변환

const testCase = "StuDY";

function mySolution1(str) {
  return str
    .split("")
    .map((char) => {
      const unicode = char.charCodeAt();
      if (unicode >= 65 && unicode <= 90) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    })
    .join("");
}
function solution(str) {
  return;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
