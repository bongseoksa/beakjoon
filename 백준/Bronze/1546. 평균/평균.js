const fs = require('fs');
let inputStr = fs.readFileSync('/dev/stdin').toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const subjectCnt = parseInt(inputs[0]);
const scoreList = inputs[1].split(' ');

/** 기능 구현 */

/** solution 함수 정의  */
function solution(count, list) {
  const maxListItem = Math.max(...list);
  const managedList = list.map((item) => (item / maxListItem) * 100);
  const listSum = managedList.reduce((acc, cur) => acc + cur);
  console.log(listSum / count);
}

/** solution 함수 호출 */
solution(subjectCnt, scoreList);