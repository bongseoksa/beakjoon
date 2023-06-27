const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const caseCnt = parseInt(inputs.shift());

/** 기능 구현 */

/** solution 함수 정의  */
function solution(input) {
  let letterList = input.split(' ');
  letterList = letterList.map((letter) => letter.split('').reverse().join(''));
  console.log(letterList.join(' '));
}

/** solution 함수 호출 */
for (let i = 0; i < caseCnt; i++) solution(inputs[i]);
