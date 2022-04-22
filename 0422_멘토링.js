// 32. 멘토링 (section04_03)

const testCase = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

function mySolution1(reports) {
  let count = 0;
  const record = new Map();
  reports.forEach((report) => {
    report.forEach((student, rank) => {
      if (!record.has(student)) record.set(student, []);
      record.set(student, record.get(student).concat(rank));
    });
  });
  const newRecord = new Map(
    Array.from(record).map(([key, value]) => [key, [...new Set(value)]])
  );
  for (let i = 1; i <= newRecord.size; i++) {
    const ranks = newRecord.get(i);
    for (let j = 1; j <= newRecord.size; j++) {
      if (i === j) continue;
      const [min] = newRecord.get(j).sort((a, b) => a - b);
      const isMatch = ranks.every((i) => i <= min);
      if (isMatch) count += 1;
    }
  }
  return count;
}

function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
