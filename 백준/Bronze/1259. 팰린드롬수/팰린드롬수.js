const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let index = 0;
let inputs = inputStr.split('\n').map(Number);

/** 기능 구현 */

/** solution 함수 정의  */
function solution(num) {
  let numStr = '' + num;
  let isPalindrome = true;
  for (let i = 0; i <= Math.floor(numStr.length / 2); ++i) {
    if (numStr[i] !== numStr[numStr.length - (1 + i)]) {
      console.log('no');
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) console.log('yes');
}

/** solution 함수 호출 */
while (true) {
  solution(inputs[index]);
  index++;
  if (inputs[index] === 0) break;
}
