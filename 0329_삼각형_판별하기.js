const testCase1 = [6, 7, 11];
const testCase2 = [13, 33, 17];

function mySolution1(a, b, c) {
  const [line1, line2, max] = [a, b, c].sort((a, b) => a - b);
  return max >= line1 + line2 ? "NO" : "YES";
}

function solution(a, b, c) {
  let answer = "YES";
  let maxValue = a;
  let tot = a + b + c;
  if (b > maxValue) maxValue = b;
  if (c > maxValue) maxValue = c;
  if (tot - maxValue <= maxValue) answer = "NO";
  return answer;
}

console.log(mySolution1(...testCase1));
console.log(mySolution1(...testCase2));
console.log(solution(...testCase1));
console.log(solution(...testCase2));
