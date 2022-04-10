// 20. 가위바위보 (section02_03)

const A_Player = [2, 3, 3, 1, 3];
const B_Player = [1, 1, 2, 2, 3];

function mySolution1(aPlayer, bPlayer) {
  return aPlayer.map((r, i) => {
    if (r === 1 && bPlayer[i] === 2) return "B";
    if (r === 1 && bPlayer[i] === 3) return "A";
    if (r === 2 && bPlayer[i] === 1) return "A";
    if (r === 2 && bPlayer[i] === 3) return "B";
    if (r === 3 && bPlayer[i] === 1) return "B";
    if (r === 3 && bPlayer[i] === 2) return "A";
    return "D";
  });
}

function mySolution2(aPlayer, bPlayer) {
  return aPlayer.map((r, i) => {
    if (r > bPlayer[i]) {
      if (r - bPlayer[i] === 2) return "B";
      return "A";
    }
    if (r < bPlayer[i]) {
      if (bPlayer[i] - r === 2) return "A";
      return "B";
    }
    return "D";
  });
}

function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}

console.log(mySolution1(A_Player, B_Player));
console.log(mySolution2(A_Player, B_Player));
console.log(solution(A_Player, B_Player));
