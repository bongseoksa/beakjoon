const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
let measureCnt = parseInt(inputs[0]);
let measureList = inputs[1].split(' ').map((input) => +input);

/** 기능 구현 */

/** solution 함수 정의  */
function solution(cnt, list) {
  console.log(Math.min(...list) * Math.max(...list));
}

/** solution 함수 호출 */
solution(measureCnt, measureList);
