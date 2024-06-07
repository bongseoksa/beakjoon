const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const N = +inputs[0];

let nums = Array.from({ length: N });
nums = nums.map((num, index) => (num = index + 1));
let visited = new Array(nums.length).fill(false);
let selectedNums = [];
let result = '';

/** 기능 구현 */
function dfs(depth) {
  if (depth === N) {
    result += selectedNums.join(' ');
    result += '\n';
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selectedNums.push(nums[i]);
    dfs(depth + 1);
    visited[i] = false;
    selectedNums.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0);
  console.log(result);
}

/** solution 함수 호출 */
solution();
