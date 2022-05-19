// 59. 이분검색 (section07_10)

const testCase1 = [23, 87, 65, 12, 57, 32, 99, 81];
const testCase2 = [7, 12, 23, 32, 57, 65, 72, 81, 87, 99, 100];

function mySolution1(target, arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let prevIdx = (temp = 0);
  let idx = sorted.length % 2 === 0 ? sorted.length / 2 : (sorted.length - 1) / 2;
  while (true) {
    temp = idx;
    if (sorted[idx] === target) {
      break;
    }
    const abs = Math.abs(idx - prevIdx);
    if (sorted[idx] > target) {
      idx = abs % 2 === 0 ? idx - abs / 2 : idx - (abs - 1) / 2;
    } else {
      idx = abs % 2 === 0 ? idx + abs / 2 : idx + (abs - 1) / 2;
    }
    prevIdx = temp;
  }
  return idx + 1;
}

function mySolution2(target, arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let prevIdx = 0;
  let idx = Math.floor(sorted.length / 2);
  while (true) {
    if (sorted[idx] === target) break;
    const diff = Math.floor(Math.abs(idx - prevIdx) / 2);
    prevIdx = idx;
    idx = sorted[idx] > target ? idx - diff : idx + diff;
  }
  return idx + 1;
}

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}

console.log(mySolution1(32, testCase1));
console.log(mySolution1(87, testCase2));
console.log(mySolution2(32, testCase1));
console.log(mySolution2(87, testCase2));
console.log(solution(32, testCase1));
console.log(solution(87, testCase2));
