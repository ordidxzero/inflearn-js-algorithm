// 42. 모든 아나그램 (section05_08)

const testCase = ["bacaAacba", "abc"];

const recordChar = (p, c) => {
  if (p.has(c)) p.set(c, p.get(c) + 1);
  else p.set(c, 1);
  return p;
};

function mySolution1(s, t) {
  let answer = 0;
  const obj = t.split("").reduce(recordChar, new Map());
  for (let i = 0; i < s.length - t.length + 1; i++) {
    let count = 0;
    const target = s
      .slice(i, i + t.length)
      .split("")
      .reduce(recordChar, new Map());
    if (target.size !== obj.size) continue;
    for (const [key, value] of obj) {
      if (!target.has(key) || target.get(key) !== value) break;
      count += 1;
    }
    if (count === t.length) answer += 1;
  }
  return answer;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(solution(...testCase));
