const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');

/** 기능 구현 */
/**
 * 단일 문제 처리
 * @param {*} repeatCnt 문자 반복 횟수
 * @param {*} word 문자열
 */
const repeatQuest = (repeatCnt, word) => {
  let result = '';
  for (letter of word) {
    result += getRepeatLetter(repeatCnt, letter);
  }
  return result;
};

/**
 * 각 문자 반복 처리
 * @param {*} repeatCnt 반복 횟수
 * @param {*} letter 문자
 * @returns
 */
const getRepeatLetter = (repeatCnt, letter) => {
  let repeatLetter = '';
  for (let i = 0; i < repeatCnt; i++) {
    repeatLetter += letter;
  }
  return repeatLetter;
};

/** solution 함수 정의  */
function solution() {
  const questCnt = parseInt(inputs[0]);
  for (let i = 0; i < questCnt; i++) {
    const quest = inputs[i + 1].split(' ');
    console.log(repeatQuest(Number(quest[0]), quest[1]));
  }
}

/** solution 함수 호출 */
solution();
