// 33. 졸업선물 (section04_04)

const testCase = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

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

function mySolution1(budget, gift) {
  let answer = 0;
  main_loop: for (let count = gift.length; count > 0; count--) {
    const combinations = getCombinations(gift, count);
    let max = 0;
    for (const combination of combinations) {
      const total = combination.reduce((prev, [price, shippingFee]) => {
        max = price > max ? price : max;
        return prev + price + shippingFee;
      }, 0);
      if (total - max / 2 <= budget) {
        answer = count;
        break main_loop;
      }
    }
  }
  return answer;
}

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(mySolution1(28, testCase));
console.log(solution(28, testCase));
