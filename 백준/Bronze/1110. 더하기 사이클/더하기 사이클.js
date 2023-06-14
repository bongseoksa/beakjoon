const fs = require('fs');
let inputStr = fs.readFileSync('/dev/stdin').toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
let input = parseInt(inputs[0]);

/**
 * 기능 구현
 */
// 1의 자리, 10의자리 수 더하기
function addDigits(num) {
  num = parseInt(num);
  return num < 10 ? num : Math.floor(num / 10) + Math.floor(num % 10);
}
// 1의 자리 값 구하기
function getUnits(num) {
  return parseInt(num) < 10 ? num : Math.floor(num % 10);
}

//새로운 값 구하기
function getNewNumber(num) {
  const addDigitVal = addDigits(num);
  const unitDigitVal = getUnits(addDigitVal);
  const unitVal = getUnits(num);
  return parseInt(unitVal + '' + unitDigitVal);
}

// 사이클 구하기
function getCycle(num) {
  let cycle = 0;
  let newVal = num;
  while (true) {
    cycle++;
    newVal = getNewNumber(newVal);
    if (newVal === num) break;
  }
  return cycle;
}

/** solution 함수 정의  */
function solution(num) {
  const cycle = getCycle(num);
  console.log(cycle);
}

/** solution 함수 호출 */
solution(input);