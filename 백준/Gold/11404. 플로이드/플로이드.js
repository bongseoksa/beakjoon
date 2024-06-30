const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const n = +inputs.shift();
const m = +inputs.shift();
let graph = []; // 시작, 종료, 비용
for (let i = 0; i < n + 1; i++) {
  graph.push(new Array(n + 1).fill(Infinity));
  graph[i][i] = 0;
}

for (let i = 0; i < inputs.length; i++) {
  const [start, end, cost] = inputs[i].split(' ').map(Number);
  graph[start][end] = Math.min(graph[start][end], cost);
}

/** 기능 구현 */
function quest() {
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= n; a++) {
      for (let b = 1; b <= n; b++) {
        const cost = graph[a][i] + graph[i][b];
        graph[a][b] = Math.min(graph[a][b], cost);
      }
    }
  }

  let answer = '';
  for (let i = 1; i < graph.length; i++) {
    for (let j = 1; j < graph[i].length; j++) {
      answer += graph[i][j] === Infinity ? '0 ' : `${graph[i][j]} `;
    }
    answer += '\n';
  }

  console.log(answer);
}

/** solution 함수 정의  */
function solution() {
  quest();
}

/** solution 함수 호출 */
solution();
