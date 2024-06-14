const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const n = +inputs[0];
/* 퀸 움직임 : 상, 하, 좌, 우, 양측 대각선 */
let total = 0;
let selected = [];

/** 기능 구현 */
function possible(x, y) {
  for (let [row, col] of selected) {
    if (row === x || col === y) return false;
    if (Math.abs(row - x) === Math.abs(col - y)) return false;
  }

  return true;
}

function dfs(row) {
  if (row === n) {
    total++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;

    selected.push([row, i]);
    dfs(row + 1);
    selected.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0);
  console.log(total);
}

/** solution 함수 호출 */
solution();
