// 40. 학급 회장 (section05_06)

const testCase = "BACBACCACCBDEDE";

function mySolution1(str) {
  let max = ["", 0];
  const record = new Map();
  for (const c of str) {
    record.has(c) ? record.set(c, record.get(c) + 1) : record.set(c, 1);
  }
  for (const [key, value] of record.entries()) {
    if (value > max[1]) max = [key, value];
  }
  return max[0];
}

function solution(k, arr) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
