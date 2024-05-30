const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const N = Number(inputs.shift());
const Hi = inputs[0].split(' ').map(Number);

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let vals = [];
  for (let i = 0; i < Hi.length; i++) {
    const index = vals.findIndex((val) => val - 1 === Hi[i]);
    if (index === -1) {
      vals.push(Hi[i]);
    } else {
      vals[index] = Hi[i];
    }
  }
  console.log(vals.length);
}

/** solution 함수 호출 */
solution();
