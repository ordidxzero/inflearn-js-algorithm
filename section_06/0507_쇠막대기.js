// 47. 쇠막대기 (section06_05)

const testCase1 = "()(((()())(())()))(())";
const testCase2 = "(((()(()()))(())()))(()())";

function mySolution1(str) {
  let count = 0;
  let stack = [];
  const splited = str.replace(/\(\)/g, "-").replace(/^-|-$/g, "").split("");
  splited.forEach((c) => {
    if (c === "(") {
      stack.push(1);
      count += 1;
    } else if (c === ")") count -= 1;
    else stack = stack.map((num, i) => (i > count - 1 ? num : num + 1));
  });
  return stack.reduce((a, b) => a + b, 0);
}

function solution(str) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer++;
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));

console.log(solution(testCase1));
console.log(solution(testCase2));
