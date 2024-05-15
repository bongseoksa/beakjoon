const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  const valA = parseInt(inputs[0]);
  const valB = inputs[1].split('').map((val) => parseInt(val));

  const mul1 = valA * valB[2];
  const mul10 = valA * valB[1];
  const mul100 = valA * valB[0];
  console.log(mul1);
  console.log(mul10);
  console.log(mul100);
  console.log(mul100 * 100 + mul10 * 10 + mul1);
}

/** solution 함수 호출 */
solution();
