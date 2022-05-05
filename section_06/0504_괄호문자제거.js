// 44. 괄호문자제거 (section06_02)

const testCase = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

function mySolution1(str) {
  let answer = "";
  let count = 0;
  for (const char of str) {
    if (char === "(") {
      count += 1;
      continue;
    }
    if (char === ")") {
      count -= 1;
      continue;
    }
    if (count === 0) {
      answer += char;
    }
  }
  return answer;
}

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
