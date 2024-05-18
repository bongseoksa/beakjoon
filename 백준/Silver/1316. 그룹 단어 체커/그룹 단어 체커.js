const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  const questCnt = Number(inputs.shift());
  let groupCnt = 0;
  for (let i = 0; i < questCnt; ++i) {
    let isGroup = 1; // 1:그룹 0:미그룹
    let letters = inputs[i].split('');
    let setter = new Set(letters[0]);
    for (let j = 0; j < letters.length - 1; j++) {
      if (letters[j] !== letters[j + 1]) {
        if (setter.has(letters[j + 1])) {
          isGroup = 0;
          break;
        }
        setter.add(letters[j + 1]);
      }
    }

    groupCnt += isGroup;
  }
  console.log(groupCnt);
}

/** solution 함수 호출 */
solution();
