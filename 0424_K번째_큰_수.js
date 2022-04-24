// 34. K번째 큰 수 (section04_05)

const testCase = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
};

function mySolution1(n, k, cards) {
  const combinations = getCombinations(cards, 3);
  const sum = combinations
    .map((combination) => combination.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a);
  return sum[k - 1];
}

function mySolution2(n, k, cards) {
  const three = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        three.add(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  const a = Array.from(three).sort((a, b) => b - a);
  return a[k - 1];
}

function solution(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

console.log(mySolution1(10, 5, testCase));
console.log(solution(10, 5, testCase));
