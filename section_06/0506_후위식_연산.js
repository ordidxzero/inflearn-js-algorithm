// 46. 후위식 연산 (section06_04)

const testCase = "352+*9-";

function mySolution1(str) {
  return str.split("").reduce((stage, el) => {
    if (!isNaN(el)) stage.push(el);
    else {
      const [a, b] = stage.slice(stage.length - 2);
      stage = stage.slice(0, stage.length - 2);
      stage.push(eval(a + el + b));
    }
    return stage;
  }, [])[0];
}

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

console.log(mySolution1(testCase));
console.log(solution(testCase));
