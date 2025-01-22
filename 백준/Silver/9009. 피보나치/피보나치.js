const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력 예제 input 값 초기화 */
let inputs = inputStr.split('\n').map(Number);
const T = inputs.shift();

let fibo = [1, 2];

/** 피보나치 수열 미리 생성 */
function generateFibo(max) {
  while (true) {
    const next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    if (next > max) break;
    fibo.push(next);
  }
}

/** 테스트 케이스 풀이 */
function solveTest(number) {
  let left = number;
  let results = [];
  let n = fibo.length - 1;

  while (left > 0) {
    if (left >= fibo[n]) {
      left -= fibo[n];
      results.push(fibo[n]);
    }
    n--;
  }
  console.log(results.reverse().join(' '));
}

/** solution 함수 정의 */
function solution() {
  const maxInput = Math.max(...inputs);
  generateFibo(maxInput);

  for (let i = 0; i < T; i++) {
    solveTest(inputs[i]);
  }
}

/** solution 함수 호출 */
solution();