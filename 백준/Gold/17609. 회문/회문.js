const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const tc = Number(inputs[0]);

/** 기능 구현 */
function routine(word, left, right) {
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/** solution 함수 정의  */
function solution() {
  let result = '';
  for (let i = 0; i < tc; i++) {
    let misMatchCnt = 0;
    const word = inputs[i + 1].trim();
    let frontIndex = 0;
    let backIndex = word.length - 1;
    while (frontIndex < backIndex) {
      if (word[frontIndex] !== word[backIndex]) {
        if (
          routine(word, frontIndex + 1, backIndex) ||
          routine(word, frontIndex, backIndex - 1)
        ) {
          misMatchCnt = 1;
        } else {
          misMatchCnt = 2;
        }
        break;
      }
      if (misMatchCnt >= 2) break;
      frontIndex++;
      backIndex--;
    }
    result += misMatchCnt + '\n';
  }

  // 문자 절반을 담는다
  console.log(result.trim());
}

/** solution 함수 호출 */
solution();
