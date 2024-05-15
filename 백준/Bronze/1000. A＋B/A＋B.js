const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ');

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  console.log(parseInt(inputs[0]) + parseInt(inputs[1]));
}

/** solution 함수 호출 */
solution();
