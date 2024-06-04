const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
let [K, N] = inputs.shift().split(' ').map(Number);
let Ks = inputs.map(Number);

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  // 각 전선을 같은 길이로 잘랐을때 버리는 길이가 가장 적어야 함
  let start = 1;
  let end = Math.max(...Ks);
  let maxN = 0;
  let lengthN = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let totalN = 0;
    for (let i = 0; i < K; i++) {
      totalN += parseInt(Ks[i] / mid);
    }

    if (totalN >= N) {
      // 개수 여유. 더 길게 잘라. start 늘려
      start = mid + 1;
      maxN = totalN;
      lengthN = mid;
    } else {
      // 개수 부족. 더 짧게 잘라. end 줄여
      end = mid - 1;
    }
  }

  console.log(lengthN);
}

/** solution 함수 호출 */
solution();
