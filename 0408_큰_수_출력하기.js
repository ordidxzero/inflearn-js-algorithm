// 18. 큰 수 출력하기 (section02_01)

const testCase1 = [7, 3, 9, 5, 6, 12];
const testCase2 = [7, 5, 40, 95, 1, 12];
const testCase3 = [59, 23, 499, 15, 60, 122];

function mySolution1(nums) {
  return nums.filter((num, i, arr) => i === 0 || arr[i - 1] < num);
}

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(mySolution1(testCase3));
console.log(solution(testCase1));
