// 07. 10부제

const testCase = [25, 23, 11, 47, 53, 17, 33];

function mySolution(day, arr) {
  return arr.filter((num) => num % 10 === day).length;
}

function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

console.log(mySolution(3, testCase));
console.log(solution(3, testCase));
