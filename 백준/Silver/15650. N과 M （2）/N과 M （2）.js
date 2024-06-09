const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ');
const [n, m] = [...inputs].map(Number);

let arr = [];
for (let i = 0; i < n; i++) arr.push(i + 1);
let visited = new Array(n).fill(false);
let selected = [];

/** 기능 구현 */
function dfs(depth, start) {
  if (depth === m) {
    console.log(selected.join(' '));
    return;
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;

    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0, 0);
}

/** solution 함수 호출 */
solution();
