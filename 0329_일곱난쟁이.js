// 08. 일곱난쟁이

const testCase = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// 9개의 합을 구한 후, 2개를 뺐을 때 100이 되는 아이디어를 사용함
function mySolution1(arr) {
  let answer = [...arr];
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        answer.splice(i, 1);
        answer.splice(j, 1);
      }
    }
  }
  return answer;
}

function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
