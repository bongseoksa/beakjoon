const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ').map(Number);

/** 기능 구현 */
function factorial(n) {
  let value = 1;
  for (let i = 1; i <= n; ++i) value *= i;
  return value;
}

/** solution 함수 정의  */
function solution(totalCnt, pickCnt) {
  console.log(factorial(totalCnt) / factorial(totalCnt - pickCnt) / factorial(pickCnt));
}

/** solution 함수 호출 */
solution(inputs[0], inputs[1]);
