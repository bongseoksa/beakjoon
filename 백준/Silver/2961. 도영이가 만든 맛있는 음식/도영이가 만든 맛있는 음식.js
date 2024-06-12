const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const n = +inputs.shift();
const ingredients = [];
for (let i = 0; i < n; i++) ingredients.push(inputs[i].split(' ').map(Number));

let visited = new Array(n).fill(false);
let selected = [];
let minGap = Infinity;
let curIndex = -1;
/** 기능 구현 */
function dfs(start, depth) {
  if (depth > 0) {
    let resultS = []; // 신맛
    let resultB = []; // 쓴맛
    let totalS = 0;
    let totalB = 0;

    selected.map((index) => {
      resultS.push(ingredients[index][0]);
      resultB.push(ingredients[index][1]);
    });

    totalS = resultS.reduce((a, b) => a * b);
    totalB = resultB.reduce((a, b) => a + b);

    minGap = Math.min(minGap, Math.abs(totalS - totalB));
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    curIndex = Math.max(curIndex, i);
    visited[i] = true;
    selected.push(i);
    dfs(i + 1, depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

/** solution 함수 정의  */
function solution() {
  dfs(0, 0);
  console.log(minGap);
}

/** solution 함수 호출 */
solution();
