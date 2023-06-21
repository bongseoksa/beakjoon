const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ').map(Number);

/** 기능 구현 */

/** solution 함수 정의  */
function solution(row, col) {
  console.log(row * col - 1);
}

/** solution 함수 호출 */
solution(inputs[0], inputs[1]);
