// 36. 공통원소 구하기 (section05_02)

const testCase = [
  [1, 3, 9, 5, 2],
  [3, 2, 5, 7, 8],
];

function mySolution1(arr1, arr2) {
  const answer = [];
  arr1.sort();
  arr2.sort();
  let ptr1 = (ptr2 = 0);
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] === arr2[ptr2]) {
      answer.push(arr1[ptr1++]);
      ptr2++;
    } else if (arr1[ptr1] > arr2[ptr2]) ptr2++;
    else ptr1++;
  }
  return answer;
}

function mySolution2(arr1, arr2) {
  const answer = [];
  for (const num1 of arr1) {
    for (const num2 of arr2) {
      if (num1 === num2) answer.push(num1);
    }
  }
  return answer.sort();
}

function mySolution3(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num)).sort();
}

function solution(arr1, arr2) {
  let answer = [];
  arr1.sort();
  arr2.sort();
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(mySolution2(...testCase));
console.log(mySolution3(...testCase));
console.log(solution(...testCase));
