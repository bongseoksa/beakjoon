const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let input = inputStr.trim().toUpperCase();

/** 기능 구현 */
// 문자열을 항목별로 분류
function separateWord(word) {
  const words = word.split('');
  let wordKeyObj = {};
  words.forEach((key) => (wordKeyObj[key] ? wordKeyObj[key]++ : (wordKeyObj[key] = 1)));
  return wordKeyObj;
}

// 가장 많이 쓰인 문자 구하기
function getMaxUsedLetter(wordObj) {
  const wordKeys = Object.keys(wordObj);
  let maxUsedCnt = -1;
  let maxUsedLetter = '';
  for (let i = 0; i < wordKeys.length; ++i) {
    if (wordObj[wordKeys[i]] === maxUsedCnt) {
      maxUsedLetter = '?';
    } else if (wordObj[wordKeys[i]] > maxUsedCnt) {
      maxUsedCnt = wordObj[wordKeys[i]];
      maxUsedLetter = wordKeys[i];
    }
  }
  return maxUsedLetter;
}

/** solution 함수 정의  */
function solution(word) {
  const wordObj = separateWord(word);
  console.log(getMaxUsedLetter(wordObj));
}

/** solution 함수 호출 */
solution(input);
