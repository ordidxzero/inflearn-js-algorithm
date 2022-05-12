// 52. Special Sort (section07_03)

const testCase = [1, 2, 3, -3, -2, 5, 6, -6];

function mySolution1(arr) {
  const answer = [...arr];
  const negative = [];
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] > 0) continue;
      negative.push(answer.splice(j, 1)[0]);
      break;
    }
  }
  answer.unshift(...negative);
  return answer;
}

function mySolution2(arr) {
  const answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] > 0) continue;
      const [target] = answer.splice(j, 1);
      answer.splice(i, 0, target);
      break;
    }
  }
  return answer;
}

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
