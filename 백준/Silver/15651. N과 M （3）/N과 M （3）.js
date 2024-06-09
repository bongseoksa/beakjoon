const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ');
const [n, m] = [...inputs].map(Number);

/** 기능 구현 */
let result = [];
let answer = '';
function dfs(arr, depth) {
  if (depth === m) {
    answer += result.join(' ');
    answer += `\n`;
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    dfs(arr, depth + 1);
    result.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push(i + 1);
  dfs(arr, 0);
  console.log(answer);
}

/** solution 함수 호출 */
solution();
