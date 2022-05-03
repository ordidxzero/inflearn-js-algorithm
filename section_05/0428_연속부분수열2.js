// 38. 연속부분수열2 (section05_04)

const testCase = [5, [1, 3, 1, 2, 3]];

function mySolution1(m, arr) {
  let count = 0;
  arr.forEach((_, i) => {
    let sum = 0;
    for (let ptr = i; ptr < arr.length; ptr++) {
      sum += arr[ptr];
      if (sum <= m) count += 1;
      else break;
    }
  });
  return count;
}

function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(solution(...testCase));
