// 35. 두 배열 합치기 (section05_01)

const testCase = [
  [1, 3, 5],
  [2, 3, 6, 7, 9],
];

function mySolution1(arr1, arr2) {
  const answer = [];
  let ptr1 = (ptr2 = 0);
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] <= arr2[ptr2]) answer.push(arr1[ptr1++]);
    else answer.push(arr2[ptr2++]);
  }
  if (ptr1 < arr1.length) answer.push(...arr1.slice(ptr1));
  if (ptr2 < arr2.length) answer.push(...arr2.slice(ptr2));
  return answer;
}

function mySolution2(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

console.log(mySolution1(...testCase));
console.log(mySolution2(...testCase));
console.log(solution(...testCase));
