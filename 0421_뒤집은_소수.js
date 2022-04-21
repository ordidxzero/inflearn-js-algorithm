// 31. 뒤집은 소수 (section04_02)

const testCase = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function mySolution1(numbers) {
  return numbers
    .map((n) => +n.toString().split("").reverse().join(""))
    .filter((n) => isPrime(n));
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
