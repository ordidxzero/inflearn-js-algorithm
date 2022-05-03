// 25. 회문문자열 (section03_01)

const testCase1 = "gooG";
const testCase2 = "goodG";

function mySolution1(s) {
  let front = "";
  let back = "";
  const lowerString = s.toLowerCase();
  const half = s.length / 2;
  const frontSliceIndex = half === Math.floor(half) ? half : Math.floor(half);
  const backSliceIndex = half === Math.floor(half) ? half : Math.ceil(half);
  front = lowerString.slice(0, frontSliceIndex);
  back = lowerString.slice(backSliceIndex).split("").reverse().join("");
  return front === back ? "YES" : "NO";
}

// 재귀를 이용한 회문문자열 판별법
function mySolution2(s) {
  if (str.length === 0 || str.length === 1) return "YES";
  const str = s.toLowerCase();
  if (str[0] !== str[str.length - 1]) return "NO";
  return mySolution2(str.slice(1, str.length - 1));
}

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

console.log(mySolution1(testCase1));
console.log(mySolution1(testCase2));
console.log(mySolution2(testCase1));
console.log(mySolution2(testCase2));
console.log(solution(testCase1));
