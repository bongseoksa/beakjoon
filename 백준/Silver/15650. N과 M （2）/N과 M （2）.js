const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "\\example.txt";
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(" ");
let [N, M] = inputs.map(Number);
let nums = new Array(N);
for (let i = 0; i < N; i++) nums[i] = i + 1;
let visited = Array(N).fill(false);
let selected = [];

/** 기능 구현 */

/** solution 함수 정의  */
function solution(depth) {
  if (depth === M) {
    console.log(selected.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    if (selected.length > 0 && selected[selected.length - 1] > nums[i])
      continue;

    visited[i] = true;
    selected.push(nums[i]);
    solution(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

/** solution 함수 호출 */
solution(0);
