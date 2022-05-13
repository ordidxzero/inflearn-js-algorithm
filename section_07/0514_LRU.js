// 54. LRU (section07_05)

const testCase = [1, 2, 3, 2, 6, 2, 3, 5, 7];

function mySolution1(size, arr) {
  const queue = Array.from({ length: size }, () => 0);
  for (const c of arr) {
    const i = queue.indexOf(c);
    if (i !== -1) queue.splice(i, 1);
    queue.unshift(c);
  }
  return queue.slice(0, 5);
}

function mySolution2(size, arr) {
  const queue = Array.from({ length: size }, () => 0);
  for (const c of arr) {
    let pos = -1;
    for (let i = 0; i < size; i++) if (c === queue[i]) pos = i;
    if (pos !== -1) {
      for (let i = pos; i > 0; i--) {
        queue[i] = queue[i - 1];
      }
    } else {
      for (let i = size - 1; i > 0; i--) {
        queue[i] = queue[i - 1];
      }
    }
    queue[0] = c;
  }
  return queue.slice(0, size);
}

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

console.log(mySolution1(5, testCase));
console.log(mySolution2(5, testCase));
console.log(solution(5, testCase));
