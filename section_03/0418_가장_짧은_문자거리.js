// 28. 가장 짧은 문자거리 (section03_04)

const testCase = ["teachermode", "e"];

function mySolution1(s, t) {
  const char = s.split("");
  const indices = char.reduce((p, cur, i) => (cur === t ? p.concat(i) : p), []);
  return char.map((_, currentIndex, _) => {
    return Math.min(...indices.map((i) => Math.abs(currentIndex - i)));
  });
}

function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

console.log(mySolution1(...testCase));
console.log(solution(...testCase));
