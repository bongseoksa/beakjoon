const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "\\example.txt";
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(" ");
let [N, M] = inputs.map(Number);
let nums = []; // 1~N까지 숫자 배열
for (let i = 1; i <= N; i++) {
  nums.push(i);
}
let visited = Array(N).fill(false);
let selected = [];
let result = "";

/** 기능 구현 */

/** solution 함수 정의  */
function solution(nums, depth) {
  if (depth === M) {
    result += `${selected.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(nums[i]);
    solution(nums, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

/** solution 함수 호출 */
solution(nums, 0);
console.log(result.trim());
