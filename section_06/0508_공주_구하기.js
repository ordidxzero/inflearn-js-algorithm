// 48. 공주 구하기 (section06_06)

function mySolution1(n, k) {
  let princes = Array.from({ length: n }, (_, i) => i + 1);
  let ptr = (count = 0);
  while (princes.length !== 1) {
    count += 1;
    if (count === k) {
      princes.splice(ptr, 1);
      count = 0;
      ptr -= 1;
    }
    if (ptr + 1 > princes.length - 1) {
      ptr = 0;
    } else {
      ptr += 1;
    }
  }
  return princes[0];
}

function mySolution2(n, k) {
  let princes = Array.from({ length: n }, (_, i) => i + 1);
  let ptr = 0;
  while (princes.length !== 1) {
    ptr = ptr + k > princes.length ? ptr + k - 1 - princes.length : ptr + k - 1;
    if (ptr >= princes.length) ptr -= princes.length;
    princes.splice(ptr, 1);
  }
  return princes[0];
}

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(mySolution1(8, 3));
console.log(mySolution2(8, 3));
console.log(solution(8, 3));
