// 53. 삽입정렬 (section07_04)

const testCase = [11, 7, 5, 6, 10, 9];

function mySolution1(arr) {
  const answer = [...arr];
  for (let i = 1; i < answer.length; i++) {
    let ptr = i;
    for (let j = i - 1; j >= 0; j--) {
      if (answer[i] < answer[j]) ptr = j;
    }
    answer.splice(ptr, 0, ...answer.splice(i, 1));
  }
  return answer;
}

function solution(arr) {
  let answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    let tmp = answer[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > tmp) answer[j + 1] = answer[j];
      else break;
    }
    answer[j + 1] = tmp;
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
