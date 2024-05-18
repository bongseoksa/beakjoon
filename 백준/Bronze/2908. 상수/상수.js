const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ');

/** 기능 구현 */
function convertValue(val) {
  const firstNumStr = val.charAt(0);
  return val[2] + val[1] + firstNumStr;
}

/** solution 함수 정의  */
function solution() {
  const valA = convertValue(inputs[0]);
  const valB = convertValue(inputs[1]);
  console.log(Math.max(valA, valB));
}

/** solution 함수 호출 */
solution();
