const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const caseCnt = parseInt(inputs.shift());

/** 기능 구현 */
// 최대공약수 구하기
function getGreatestCommonDivisor(bigNum, smallNum) {
  let [num, GCD] = [smallNum, bigNum % smallNum];

  while (num % GCD > 0) {
    [num, GCD] = [GCD, num % GCD];
  }

  if (GCD === 0) GCD = num;
  return GCD;
}

// 최소공배수 구하기
function getLeastCommonMultiple(bigNum, smallNum, GCD) {
  const LCM = (bigNum * smallNum) / GCD;
  return LCM;
}

/** solution 함수 정의  */
function solution(bigNum, smallNum) {
  const GCD = getGreatestCommonDivisor(bigNum, smallNum);
  const LCM = getLeastCommonMultiple(bigNum, smallNum, GCD);
  console.log(LCM);
}

/** solution 함수 호출 */
for (let i = 0; i < caseCnt; ++i) {
  const numLsit = inputs[i].split(' ').map((num) => +num);
  let bigNum = Math.max(...numLsit);
  let smallNum = Math.min(...numLsit);
  solution(bigNum, smallNum);
}
