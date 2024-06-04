const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
let [N, M] = inputs[0].split(' ').map(Number);
let trees = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let start = 0;
  let end = Math.max(...trees);

  let maxM = 0;
  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    let totalM = 0;
    for (let i = 0; i < N; i++) {
      totalM += Math.max(trees[i] - mid, 0);
    }

    if (totalM >= M) {
      // 여유. height 를 높여. 더 높은곳을 자름.. start 높이기
      start = mid + 1;
      maxM = mid;
    } else {
      // 부족. height 낮춰. 더 낮은곳 자름.. end 줄이기
      end = mid - 1;
    }
  }
  console.log(maxM);
}

/** solution 함수 호출 */
solution();
