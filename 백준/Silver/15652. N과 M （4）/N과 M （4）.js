const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ');
const [n, m] = [...inputs].map(Number);
let arr = [];
for (let i = 0; i < n; i++) arr.push(i + 1);
let selected = [];

/** 기능 구현 */
let answer = '';
function dfs(depth, start) {
  if (depth === m) {
    answer += selected.join(' ');
    answer += `\n`;
    return;
  }

  for (let i = start; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(depth + 1, i);
    selected.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0, 0);
  console.log(answer);
}

/** solution 함수 호출 */
solution();
