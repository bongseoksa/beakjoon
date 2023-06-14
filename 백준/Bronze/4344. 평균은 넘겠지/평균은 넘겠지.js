const fs = require('fs');
let inputStr = fs.readFileSync('/dev/stdin').toString();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
let inputsCopy = [...inputs];
const caseCnt = parseInt(inputsCopy[0]);
let caseList = inputsCopy.slice(1);
caseList = caseList.map((list) => list.split(' '));
inputs = null;
inputsCopy = null;

/** 기능 구현 */
// 단일 케이스 조정
function manageSingleCase(list) {
  list = [...list].map((score) => parseInt(score));
  const cnt = list[0];
  const scoreList = list.slice(1);
  return { cnt, scoreList };
}

//평균값 구하기
function getAvarageData(caseData) {
  const scoreSum = caseData.scoreList.reduce((acc, cur) => acc + cur);
  return scoreSum / caseData.cnt;
}

// 평균 이상 학생 비율 구하기
function getOverAvarageStudentRate(caseData, avarage) {
  let overAvarageCnt = 0;
  caseData.scoreList.forEach((score) => {
    if (score > avarage) overAvarageCnt++;
  });
  return ((overAvarageCnt / caseData.cnt) * 100).toFixed(3);
}

/** solution 함수 정의  */
function solution() {
  for (let i = 0; i < caseCnt; ++i) {
    const caseData = manageSingleCase(caseList[i]);
    const avarage = getAvarageData(caseData);
    console.log(getOverAvarageStudentRate(caseData, avarage) + '%');
  }
}

/** solution 함수 호출 */
solution(caseList);