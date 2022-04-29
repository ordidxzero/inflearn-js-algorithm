// 39. 최대 매출 (section05_05)

const testCase = [3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]];

function mySolution1(k, arr) {
  let max = 0;
  let common = arr.slice(0, k - 1).reduce((a, b) => a + b, 0);
  for (let i = k - 1; i < arr.length; i++) {
    common += arr[i];
    if (common > max) max = common;
    common -= arr[i - k + 1];
  }
  return max;
}
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(solution(...testCase));
