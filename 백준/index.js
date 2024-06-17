const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const tc = +inputs.shift();

/** 기능 구현 */
function quest([m, n, k], arr) {
  console.log([m, n, k], arr);

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  let visited = new Set();
  let total = 0;

  dfs(0, arr[0][0], arr[0][1]);
  function dfs(depth, x, y) {
    console.log(depth, x, y);

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited.has([nx, ny])) continue;

      visited.add([nx, ny]);
      dfs(depth + 1, nx, ny);
      visited.delete([nx, ny]);
    }
  }
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
