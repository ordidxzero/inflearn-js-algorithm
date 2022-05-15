// 55. 장난꾸러기 현수 (section07_06)

const testCase1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const testCase2 = [120, 130, 150, 150, 130, 150];

function mySolution1(arr) {
  const answer = [120, ...arr, 180];
  let hyeonsu = (partner = -1);
  for (let i = 1; i < answer.length - 1; i++) {
    if (
      answer[i - 1] < answer[i] &&
      answer[i + 1] <= answer[i] &&
      answer[i - 1] <= answer[i + 1] &&
      hyeonsu == -1
    )
      hyeonsu = i;
    if (
      answer[i - 1] > answer[i] &&
      answer[i + 1] > answer[i] &&
      answer[i - 1] <= answer[i + 1] &&
      partner == -1
    )
      partner = i;
  }
  return [hyeonsu, partner];
}

function mySolution2(arr) {
  const answer = [];
  const sorted = [...arr].sort();
  sorted.forEach((v, i) => v !== arr[i] && answer.push(i + 1));
  return answer;
}

function mySolution3(arr) {
  const sorted = [...arr].sort();
  return sorted.map((_, i) => i + 1).filter((_, i) => sorted[i] !== arr[i]);
}

function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(mySolution2(testCase1));
console.log(mySolution2(testCase2));
console.log(mySolution3(testCase1));
console.log(mySolution3(testCase2));
console.log(solution(testCase1));
console.log(solution(testCase2));
