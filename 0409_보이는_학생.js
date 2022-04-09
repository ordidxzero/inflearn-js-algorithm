// 19. 보이는 학생 (section02_02)

const testCase = [130, 135, 148, 140, 145, 150, 150, 153];

function mySolution1(students) {
  let maxHeight = students[0]; // 맨 앞 학생보다 작으면 안보이기 때문에 초기 최댓값은 맨 앞 학생의 키로 하는 게 논리적이다.
  let answer = 1; // 맨 앞 학생은 무조건 보이기 때문에 0이 아닌 1로 시작한다.
  students.forEach((student) => {
    if (maxHeight < student) {
      maxHeight = student;
      answer += 1;
    }
  });
  return answer;
}

function mySolution2(students) {
  let maxHeight = students[0];
  return students.reduce((prev, cur) => {
    if (maxHeight >= cur) return prev;
    maxHeight = cur;
    return prev + 1;
  }, 1);
}

function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

console.log(mySolution1(testCase));
console.log(mySolution2(testCase));
console.log(solution(testCase));
