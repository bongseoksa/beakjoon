const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split(' ').map(Number);
/** 기능 구현 */

/** solution 함수 정의  */
function solution() {
  let [N, K] = inputs;
  // 최소 필요개수 체크
  const minBall = (K * (K + 1)) / 2;
  if (minBall > N) {
    console.log(-1);
    return;
  }

  N -= minBall;

  let Ks = new Array(K).fill(0);
  Ks = Ks.map((val, index) => (val += index + 1));

  let index = K - 1;
  while (N > 0) {
    if (index < 0) index = K - 1;
    Ks[index]++;
    N--;
    index--;
  }

  const setter = new Set(Ks);

  if (setter.size !== Ks.length) {
    console.log(-1);
  } else {
    console.log(Ks[K - 1] - Ks[0]);
  }
}

/** solution 함수 호출 */
solution();
