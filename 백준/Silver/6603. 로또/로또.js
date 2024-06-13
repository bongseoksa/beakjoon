const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

/** 기능 구현 */
function lotto(k, tc) {
  let visited = new Array(k).fill(false);

  let answer = '';
  let selected = [];
  function dfs(start, depth) {
    //6개 뽑기
    if (depth === 6) {
      answer += selected.join(' ');
      answer += '\n';
      return;
    }

    for (let i = start; i < k; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(tc[i]);
      dfs(i + 1, depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }

  dfs(0, 0);
  console.log(answer);
}

/** solution 함수 정의  */
function solution() {
  let tcIndex = 0;
  while (true) {
    const tc = inputs[tcIndex].split(' ').map(Number);
    const k = tc.shift();

    if (k === 0) break;
    lotto(k, [...tc]);
    tcIndex++;
  }
}

/** solution 함수 호출 */
solution();
