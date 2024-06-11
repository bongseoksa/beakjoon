const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const n = +inputs.shift();
const wij = [];
for (let i = 0; i < n; i++) {
  wij.push(inputs[i].split(' ').map(Number));
}

let visited = new Array(n).fill(false);
let selected = [];
let minCost = Infinity; // 최소 순회 비용
/** 기능 구현 */
function dfs(startW, depth) {
  if (depth === n - 1) {
    let total = 0;
    let cost = 0;
    let from = startW;
    let to = null;
    for (let i = 0; i < selected.length; i++) {
      to = selected[i];
      cost = wij[from][to];
      if (cost === 0) return; //방문불가 리턴

      total += wij[from][to];
      from = selected[i];
    }

    // 시작점으로 귀환
    to = startW;
    cost = wij[from][to];
    if (cost === 0) return;
    total += cost;
    minCost = Math.min(minCost, total);
    return;
  }

  for (let i = startW; i < startW + n; i++) {
    const index = i <= n - 1 ? i : i - n;
    if (visited[index] || index === startW) continue;
    visited[index] = true;
    selected.push(index);

    dfs(startW, depth + 1);
    selected.pop();
    visited[index] = false;
  }
}

/** solution 함수 정의  */
function solution() {
  // n개의 도시 모두 순회 필수. 시작점 외 중복 불가
  for (let i = 0; i < n; i++) {
    selected = [];
    dfs(i, 0);
  }
  console.log(minCost);
}

/** solution 함수 호출 */
solution();
