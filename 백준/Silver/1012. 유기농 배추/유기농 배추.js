const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const tc = +inputs.shift();

/** 기능 구현 */
function quest([m, n, k], arr) {
  let graph = [];
  for (let i = 0; i < n; i++) graph[i] = new Array(m).fill(0);
  for (let i = 0; i < k; i++) {
    let [y, x] = arr[i];
    graph[x][y] = 1;
  }

  let total = 0;

  /** 연속된 경로 순회 후 true 반환 */
  function dfs(row, col) {
    if (row < 0 || row >= n || col < 0 || col >= m) return;

    if (graph[row][col] === 1) {
      graph[row][col] = -1;
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j)) total++;
    }
  }
  console.log(total);
}

/** solution 함수 정의  */
function solution() {
  for (let i = 0; i < tc; i++) {
    const [m, n, k] = inputs.shift().split(' ').map(Number);
    let arr = inputs.splice(0, k).map((pos) => pos.split(' ').map(Number));

    quest([m, n, k], [...arr]);
  }
}

/** solution 함수 호출 */
solution();
