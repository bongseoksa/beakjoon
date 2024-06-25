const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
// let inputs = inputStr.split('\n');
let input = +inputStr;

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let d = [];
  d[0] = 0;
  d[1] = 1; // 1
  d[2] = 2; // 00 11
  for (let i = 3; i <= input; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 15746;
  }
  console.log(d[input]);
}

/** solution 함수 호출 */
solution();
