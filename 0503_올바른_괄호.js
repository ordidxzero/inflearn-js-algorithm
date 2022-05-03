// 43. 올바른 괄호 (section06_01)

const testCase = "(()(()))(()";

function mySolution1(str) {
  const stack = [];
  for (const char of str) {
    if (char === "(") stack.push(0);
    else stack.pop();
  }
  if (stack.length === 0) return "YES";
  return "NO";
}

function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
