// 37. 연속부분수열1 (section05_03)

const testCase = [6, [1, 2, 1, 3, 1, 1, 1, 2]];

function mySolution1(m, arr) {
  let count = 0;
  let common = 0;
  for (let ptr1 = 0; ptr1 < arr.length; ptr1++) {
    let sum = common;
    for (let ptr2 = 0; ptr2 < arr.length; ptr2++) {
      sum += arr[ptr2];
      if (sum > m) {
        common = arr.slice(ptr1 + 1, ptr2).reduce((a, b) => a + b, 0);
        break;
      }
      if (sum === m) {
        count += 1;
        common = arr.slice(ptr1 + 1, ++ptr2).reduce((a, b) => a + b, 0);
        break;
      }
    }
  }
  return count;
}

function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(solution(...testCase));
