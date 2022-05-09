// 50. 선택정렬 (section07_01)

const testCase = [13, 5, 11, 7, 23, 15];

function mySolution1(arr) {
  const copied = [...arr];
  for (let i = 0; i < copied.length; i++) {
    let ptr = i;
    let min = copied[i];
    for (let j = i; j < copied.length; j++) {
      if (copied[j] < min) {
        ptr = j;
        min = copied[j];
      }
    }
    copied[ptr] = copied[i];
    copied[i] = min;
  }
  return copied;
}

function mySolution2(arr) {
  const answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    let ptr = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] < answer[ptr]) ptr = j;
    }
    [answer[i], answer[ptr]] = [answer[ptr], answer[i]];
  }
  return answer;
}

function solution(arr) {
  let answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    let idx = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] < answer[idx]) idx = j;
    }
    [answer[i], answer[idx]] = [answer[idx], answer[i]];
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
