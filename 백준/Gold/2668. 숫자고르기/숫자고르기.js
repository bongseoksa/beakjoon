const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

let inputs = inputStr.split('\n');
const n = Number(inputs.shift());
const arr = inputs.map(Number);

let graph = [0, ...arr];
let visited = Array(n + 1).fill(false);
let result = [];

function dfs(v, path, visited) {
  visited[v] = true;
  path.push(v);

  const next = graph[v];
  if (!visited[next]) {
    dfs(next, path, visited);
  } else {
    if (path.includes(next)) {
      // 사이클 발생
      const idx = path.indexOf(next);
      result.push(...path.slice(idx));
    }
  }

  path.pop(); // 백트래킹
}

function solution() {
  for (let i = 1; i <= n; i++) {
    visited.fill(false); // 매번 visited를 초기화 (사이클 탐지 위해)
    dfs(i, [], visited);
  }

  // 중복 제거 후 정렬
  const unique = [...new Set(result)].sort((a, b) => a - b);
  console.log(unique.length);
  console.log(unique.join('\n'));
}

solution();