// 49. 교육과정설계 (section06_07)

const testCase1 = ["CBA", "CBDAGE"];
const testCase2 = ["CBA", "CADGBE"];

// Speed: mySolutio2 >= solution, mySolution1 > mySolution3
// mySolution3는 mySolution2보다 10배 정도 느리다.
// mySolution1은 케이스에 따라서 시간이 달라진다.
// 느린경우 mySolution3과 비슷한 시간이 걸리고, 빠른 경우 mySolution2와 비슷한 시간이 걸린다.

function mySolution1(need, plan) {
  let answer = "NO";
  while (need.length !== 0 && plan.length !== 0) {
    if (need[0] === plan[0]) {
      need = need.substring(1);
      plan = plan.substring(1);
    } else {
      plan = plan.substring(1);
    }
  }
  if (need.length === 0) answer = "YES";
  return answer;
}

function mySolution2(need, plan) {
  if (need.length === 0) return "YES";
  if (need.length !== 0 && plan.length === 0) return "NO";
  if (need[0] !== plan[0]) return mySolution2(need, plan.substring(1));
  return mySolution2(need.substring(1), plan.substring(1));
}

function mySolution3(need, plan) {
  const regexp = new RegExp(need.split("").join("+.*"));
  return regexp.test(plan) ? "YES" : "NO";
}

function solution(need, plan) {
  console.time("solution");
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  console.timeEnd("solution");
  return answer;
}

console.log(mySolution1(...testCase1));
console.log(mySolution1(...testCase2));
console.log(mySolution2(...testCase1));
console.log(mySolution2(...testCase2));
console.log(mySolution3(...testCase1));
console.log(mySolution3(...testCase2));
console.log(solution(...testCase1));
console.log(solution(...testCase2));
