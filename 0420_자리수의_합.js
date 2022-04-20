// 30. 자리수의 합 (section04_01)

const testCase = [128, 460, 603, 40, 521, 137, 123];

function mySolution1(numbers) {
  let max = { sum: 0, number: numbers[0] };
  for (const num of numbers) {
    const sum = num
      .toString()
      .split("")
      .reduce((prev, cur) => prev + Number(cur), 0);
    if (max.sum <= sum) max = { sum, number: num };
  }
  return max.number;
}

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(7, testCase));
