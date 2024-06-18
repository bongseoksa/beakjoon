const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const n = +inputs.shift();
let nums = inputs[0].split(' ').map(Number);

/** 기능 구현 */
let maxSum = 0;
let visited = new Array(n).fill(false);
let selected = [];
function dfs(depth) {
  if (depth == n) {
    let arr = [];
    for (let i = 0; i < selected.length; i++) arr.push(nums[selected[i]]);
    let total = 0;
    for (let i = 0; i < n - 1; i++) {
      total += Math.abs(arr[i] - arr[i + 1]);
    }
    maxSum = Math.max(maxSum, total);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0);
  console.log(maxSum);
}

/** solution 함수 호출 */
solution();
