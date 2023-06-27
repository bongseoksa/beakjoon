const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
const lowercaseAscii = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
const upperrcaseAscii = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];

/** 기능 구현 */

/** solution 함수 정의  */
function solution(input) {
  let rot13 = '';
  for (let i = 0; i < input.length; ++i) {
    let charCode = input[i].charCodeAt(0);
    if (charCode >= lowercaseAscii[0] && charCode <= lowercaseAscii[1]) {
      charCode += 13;
      if (charCode > lowercaseAscii[1]) charCode = lowercaseAscii[0] + charCode - lowercaseAscii[1] - 1;
      rot13 += String.fromCharCode(charCode);
    } else if (charCode >= upperrcaseAscii[0] && charCode <= upperrcaseAscii[1]) {
      charCode += 13;
      if (charCode > upperrcaseAscii[1]) charCode = upperrcaseAscii[0] + charCode - upperrcaseAscii[1] - 1;
      rot13 += String.fromCharCode(charCode);
    } else {
      rot13 += input[i];
    }
  }
  console.log(rot13);
}

/** solution 함수 호출 */
solution(inputStr);
