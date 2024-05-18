const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  const numCnt = parseInt(inputs[0]);
  const nums = inputs[1].split('').map(Number);
  console.log(nums.reduce((a, b) => a + b));
}

/** solution 함수 호출 */
solution();
