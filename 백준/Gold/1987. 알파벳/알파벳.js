const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const [r, c] = inputs.shift().split(' ');
const map = [];
for (let i = 0; i < r; i++) map.push(inputs[i].split(''));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let visited = new Set();
let maxDepth = 1;
/** 기능 구현 */
function dfs(x, y) {
  maxDepth = Math.max(maxDepth, visited.size);
  // 상 하 좌 우
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (visited.has(map[nx][ny])) continue;

    visited.add(map[nx][ny]);
    dfs(nx, ny);
    visited.delete(map[nx][ny]);
  }
}

/** solution 함수 정의  */
function solution() {
  visited.add(map[0][0]);
  dfs(0, 0); // 시작 (0, 0)
  console.log(maxDepth);
}

/** solution 함수 호출 */
solution();
