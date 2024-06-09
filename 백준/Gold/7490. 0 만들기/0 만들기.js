const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const tc = +inputs.shift();

/** 기능 구현 */
let result = [];
function dfs(arr, depth) {
  if (depth === arr.length - 1) {
    let formula = '';
    for (let i = 0; i < arr.length; i++) {
      formula += '' + arr[i];
      if (result[i]) formula += result[i];
    }
    if (eval(formula.split(' ').join('')) === 0) console.log(formula);
    return;
  }

  for (let operate of [' ', '+', '-']) {
    result.push(operate);
    dfs(arr, depth + 1);
    result.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  for (let i = 0; i < tc; i++) {
    let arr = [];
    for (let j = 0; j < +inputs[i]; j++) arr.push(j + 1);
    result = [];
    dfs([...arr], 0);
    console.log('');
  }
}

/** solution 함수 호출 */
solution();
