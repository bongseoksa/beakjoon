const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n').map(Number);

/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  const glassCnt = inputs[0];

  let dp = [];
  dp[0] = 0;
  dp[1] = inputs[1];
  dp[2] = inputs[1] + inputs[2];
  for (let i = 3; i <= glassCnt; i++) {
    dp[i] = dp[i - 1]; // 본인 선택 안함
    dp[i] = Math.max(dp[i], inputs[i] + dp[i - 2]); //dp[i-1] : 직전까지의 최대치 => 이미 2번 연속 마셨을 수 있음
    dp[i] = Math.max(dp[i], inputs[i] + inputs[i - 1] + dp[i - 3]); // 본인과 2번째 전 항목
  }
  console.log(dp[glassCnt]);
}

/** solution 함수 호출 */
solution();
