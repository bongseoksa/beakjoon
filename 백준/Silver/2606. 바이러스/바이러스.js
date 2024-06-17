const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

let total = 0;
const computerCnt = +inputs.shift();
const connectionCnt = +inputs.shift();
let connections = [];
for (let i = 0; i < computerCnt + 1; i++) connections[i] = [];
for (let i = 0; i < connectionCnt; i++) {
  const [x, y] = inputs[i].split(' ').map(Number);
  connections[x].push(y);
  connections[y].push(x);
}
let visited = new Array(computerCnt + 1).fill(false);

/** 기능 구현 */
function dfs(nodeIndex) {
  visited[nodeIndex] = true;

  total++;

  for (let node of connections[nodeIndex]) {
    if (visited[node]) continue;
    dfs(node);
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(1);
  console.log(total - 1);
}

/** solution 함수 호출 */
solution();
