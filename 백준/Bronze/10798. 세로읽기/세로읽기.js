const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n').map((word) => word.replace('\r', ''));

/** 기능 구현 */

/** solution 함수 정의  */
function solution(wordList) {
  let result = '';
  let wordIndexedList = [];
  wordList.forEach((word) => {
    const chars = word.split('');
    chars.forEach((char, index) => {
      if (!wordIndexedList[index]) wordIndexedList[index] = [];
      wordIndexedList[index].push(char);
    });
  });

  wordIndexedList.forEach((words) => (result += words.join('')));
  console.log(result);
}

/** solution 함수 호출 */
solution(inputs);
