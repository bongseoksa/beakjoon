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
let selected = [];
let answer = "";

/** 기능 구현 */

/** solution 함수 정의  */
function solution(depth) {
  if (depth === M) {
    answer += selected.join(" ");
    answer += "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    selected.push(nums[i]);
    solution(depth + 1);
    selected.pop();
  }
}

/** solution 함수 호출 */
solution(0);
console.log(answer);
