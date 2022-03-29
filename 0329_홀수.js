// 06. 홀수

const testCase = [12, 77, 38, 41, 53, 92, 85];

function mySolution1(arr) {
  let minOddValue;
  const sum = arr.reduce((a, b) => a + b, 0);
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      if (!minOddValue) {
        minOddValue = num;
      } else {
        minOddValue = minOddValue > num ? num : minOddValue;
      }
    }
  });
  return [sum, minOddValue];
}

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
