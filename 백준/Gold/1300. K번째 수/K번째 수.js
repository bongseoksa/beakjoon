const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const N = Math.min(+inputs[0], 10**5);
const k = Math.min(+inputs[1], Math.min(10**9, N**2));
const B = [];

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let start = 1;
  let end = N**2;
  let result = 0;

  while(start <= end) {
    const mid = parseInt((start + end) / 2);
    let total = 0
    
    for(let i=1; i<=N; i++) {
      // i*j 가 mid 보다 작은 개수
      // 각 행의 배율 = i
      // 각 행에서 mid 보다 작거나 같은 최소 값 = Math.min(mid, N*i)
      // mid 보다 작은 개수 = Math.min(mid/i, N*i/i) = Math.min(mid/i, N)
      total += Math.min(parseInt(mid/i), N);
    }

    if(total >= k) {
      result = mid;
      end = mid-1;
    }
    else {
      start = mid+1
    }
  }
  console.log(result)
}

/** solution 함수 호출 */
solution();
