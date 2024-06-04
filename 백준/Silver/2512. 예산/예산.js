const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const centryCnt = Number(inputs[0]);
const budgets = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const fullBudget = Number(inputs[2]); // 보유 예산

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let maxBudget = 0; // 단일 국가 최대 지원 예산
  let start = 1; // 국가별 최소 예산
  let end = budgets.reduce((a, b) => a + b); // 총 요청 예산

  if (end <= fullBudget) {
    maxBudget = Math.max(...budgets);
  } else {
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      let totalBudget = 0;
      for (let i = 0; i < centryCnt; i++) {
        totalBudget += Math.min(mid, budgets[i]);
      }

      if (totalBudget <= fullBudget) {
        // 지원 가능
        maxBudget = mid;
        start = mid + 1;
      } else {
        // 예산 초과
        end = mid - 1;
      }
    }
  }

  console.log(maxBudget);
}

/** solution 함수 호출 */
solution();
