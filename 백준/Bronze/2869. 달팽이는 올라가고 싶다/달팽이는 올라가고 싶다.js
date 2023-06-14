const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ');
inputs = inputs.map((input) => parseInt(input));

/** 기능 구현 */

/** solution 함수 정의  */
function solution(inputs) {
  const plus = inputs[0];
  const subtract = inputs[1];
  const dayPlus = plus - subtract;

  let goal = inputs[2];
  let leftGoal = Math.floor((goal - plus) % dayPlus); // 나머지연산이 0인 경우, 마지막 밤이 되기 전에 도착 가능

  // 처음 올라갈때의 plus를(반나절) 제외한 최종 목적지까지 걸리는 기간. 반나절이 지난 후의 계산이므로 1일 추가
  let day = Math.floor((goal - plus) / dayPlus) + 1;
  if (leftGoal !== 0) day += 1; // 나머지 연산이 0이 아닌 경우, 반나절 더 올라가야함.

  console.log(day);
}

/** solution 함수 호출 */
solution(inputs);
