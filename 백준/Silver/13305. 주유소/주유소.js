const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const N = Number(inputs[0]); // 도시 개수
const dists = inputs[1].split(' ').map(Number); // 도시간 거리
const prices = inputs[2].split(' ').map(Number); // 도시별 유가

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let totalPrice = 0;
  //마지막 주유소 금액 미필요
  prices.pop();

  let leftDist = dists.reduce((a, b) => a + b);
  let minPrice = 1000000001;

  let dist = 0;
  for (let i = 0; i < N - 1; i++) {
    //유가가 제일 낮은 곳까지 처리

    //유가가 가장 낮은 곳에서 최종까지 처리
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      dist = 0;
    }

    dist = dists[i];
    totalPrice += minPrice * dist;
  }

  console.log(totalPrice);
}

/** solution 함수 호출 */
solution();
