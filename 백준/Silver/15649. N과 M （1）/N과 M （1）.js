const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const [N, M] = inputs[0].split(' ').map(Number);

let nums = Array.from({ length: N });
nums = nums.map((num, index) => (num = index + 1));
let visited = new Array(nums.length).fill(false);
let selectedNums = [];

/** 기능 구현 */
function dfs(depth) {
  if (depth === M) {
    console.log(selectedNums.join(' '));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;

    selectedNums.push(nums[i]);
    visited[i] = true;
    dfs(depth + 1);

    selectedNums.pop(); // 마지막 선택한 요소 취소
    visited[i] = false; // 마지막 방문처리 취소
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0);
}

/** solution 함수 호출 */
solution();
