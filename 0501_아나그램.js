// 41. 아나그램 (section05_07)

const testCase1 = ["AbaAeCe", "baeeACA"];
const testCase2 = ["abaCC", "Caaab"];

const recordChar = (p, c) => {
  if (p[c]) return { ...p, [c]: p[c] + 1 };
  else return { ...p, [c]: 1 };
};

function mySolution1(str1, str2) {
  const obj1 = str1.split("").reduce(recordChar, {});
  const obj2 = str2.split("").reduce(recordChar, {});
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return "NO";
  for (const key of obj1Keys) {
    if (obj1[key] !== obj2[key]) return "NO";
    return "YES";
  }
}

function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

console.log(mySolution1(...testCase1));
console.log(mySolution1(...testCase2));
console.log(solution(...testCase1));
console.log(solution(...testCase2));
