const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const tc = +inputs.shift();

let dn = []; // n값에 따른 1의 개수. 0의 개수는 dn[n-1] 과 동일
dn[0] = 0;
dn[1] = 1;
let answer = '';
/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  for (let i = 2; i <= 40; i++) {
    dn[i] = dn[i - 1] + dn[i - 2];
  }

  for (let i = 0; i < tc; i++) {
    const value = +inputs[i];
    let counts = [];
    if (value === 0) counts = [1, 0];
    else counts = [dn[value - 1], dn[value]];
    answer += `${counts.join(' ')}\n`;
  }
  console.log(answer);
}

/** solution 함수 호출 */
solution();
