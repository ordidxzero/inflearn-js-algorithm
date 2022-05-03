// 17. 중복단어제거

const testCase = ["good", "time", "good", "time", "student"];

function mySolution1(words) {
  return words.filter((word, index, arr) => arr.indexOf(word) === index);
}

function solution(s) {
  let answer;
  //console.log(s.indexOf("student"));
  answer = s.filter((v, i) => {
    //console.log(v, i);
    if (s.indexOf(v) === i) return v;
  });

  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
