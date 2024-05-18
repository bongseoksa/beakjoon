const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  const questCnt = parseInt(inputs[0]);
  for (let i = 0; i < questCnt; i++) {
    const [repeatCnt, word] = inputs[i + 1].split(' ');
    let result = '';
    for (let j = 0; j < word.length; j++) {
      result += word.charAt(j).repeat(Number(repeatCnt));
    }
    console.log(result);
  }
}

/** solution 함수 호출 */
solution();
