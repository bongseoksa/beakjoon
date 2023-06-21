const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n').map((word) => word.replace('\r', ''));
const fileCnt = inputs.shift();

/** 기능 구현 */

/** solution 함수 정의  */
function solution(cnt, list) {
  let regex = '',
    filenameLength = list[0].length;

  for (let i = 0; i < filenameLength; ++i) {
    let reg = '';
    for (let j = 0; j < cnt; ++j) {
      let char = list[j][i];
      if (reg === '') reg = char;
      else if (reg !== char) reg = '?';
    }
    regex += reg;
  }
  console.log(regex);
}

/** solution 함수 호출 */
solution(fileCnt, inputs);
