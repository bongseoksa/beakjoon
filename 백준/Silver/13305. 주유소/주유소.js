const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const N = Number(inputs[0]); // 도시 개수
const dists = inputs[1].split(' ').map(Number); // 도시간 거리
let prices = inputs[2].split(' ').map(Number); // 도시별 유가

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let totalPrice = BigInt(0);
  //마지막 주유소 금액 미필요
  prices.pop();

  let minPrice = 1000000001;
  for (let i = 0; i < prices.length; ++i) {
    if (prices[i] > minPrice) prices[i] = minPrice;
    else minPrice = prices[i];
  }

  for (let i = 0; i < N - 1; i++) {
    totalPrice += BigInt(dists[i]) * BigInt(prices[i]);
  }

  console.log(String(totalPrice));
}

/** solution 함수 호출 */
solution();
