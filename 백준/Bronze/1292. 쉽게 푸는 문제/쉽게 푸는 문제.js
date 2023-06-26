const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString();

/** 입력예제 input 값 초기화 */
let rangeList = [];
let inputs = inputStr.split(' ').map(Number);

/** 기능 구현 */
// indexOrder번째 숫자, 시작 순서, 끝 순서 구하기
function getRange(indexOrder) {
  // indexOrder 값이 이미 구해둔 rangeList 내에 있는가
  let rangeData = rangeList.find((data) => indexOrder >= data.range.s && indexOrder <= data.range.e);
  if (rangeData) return rangeData;

  // 없는 경우 rangeList 업데이트
  let num = rangeList.length > 0 ? rangeList[rangeList.length - 1]['num'] + 1 : 1;
  rangeData = { num: 0, range: { s: 0, e: 0 } };
  do {
    let s = (num * (num - 1)) / 2 + 1;
    let e = (num * (num + 1)) / 2;
    rangeData = { num, range: { s, e } };
    rangeList.push({ ...rangeData });
    if (indexOrder >= s && indexOrder <= e) {
      break;
    }

    num++;
  } while (true);
  return rangeData;
}

/** solution 함수 정의  */
function solution(start, end) {
  let numList = [];

  let num = 1;
  while (true) {
    if (numList.length >= 1000) break;
    for (let i = 1; i <= num; i++) {
      numList.push(num);
    }
    num++;
  }

  const targetNumList = numList.slice(start - 1, end);
  const sum = targetNumList.reduce((acc, curr) => (acc += curr), 0);

  console.log(sum);
  // let sum = 0;
  // const startData = getRange(start);
  // if (start === end) sum = startData.num;
  // else {
  //   // start sum
  //   sum += (startData.range.e - start + 1) * startData.num;
  //   const endData = getRange(end);
  //   // middle sum
  //   for (let i = startData.num + 1; i < endData.num; ++i) {
  //     sum += i * i;
  //   }
  //   // end sum
  //   sum += (end - endData.range.s + 1) * endData.num;
  // }
  // console.log('s', start, 'e', end, 'sum', sum);
  // console.log('rangeList', rangeList);
}

/** solution 함수 호출 */
solution(inputs[0], inputs[1]);
// solution(400, 1000);
// for (let i = 3; i <= 10; ++i) solution(3, i);
