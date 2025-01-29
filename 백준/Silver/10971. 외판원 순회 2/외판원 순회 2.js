const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "\\example.txt";
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split("\n");
const N = +inputs[0];
const W = [];
let visited = [];
for (let i = 1; i <= N; i++) {
  W[i - 1] = inputs[i].split(" ").map(Number);
}
let minDist = 1000000 * N;

/** 기능 구현 */

/** solution 함수 정의  */
function solution(start, current) {
  if (visited.length === N) {
    if (start === current) {
      let dist = 0;
      let from = start;
      for (let i = 0; i < N; i++) {
        const to = visited[i];
        if (W[from][to] === 0) return;
        dist += W[from][to];
        from = visited[i];
      }
      minDist = Math.min(minDist, dist);
    }
    return;
  }

  for (let j = 0; j < N; j++) {
    if (visited.includes(j)) continue;
    if (visited.length !== N - 1 && j === start) continue;
    visited.push(j);
    solution(start, j);
    visited.pop();
  }
}

/** solution 함수 호출 */
for (let i = 0; i < N; i++) {
  solution(i, 0);
}
console.log(minDist);
