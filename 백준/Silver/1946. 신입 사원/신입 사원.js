const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const T = Number(inputs.shift()); // 테스트 케이스 수

/** 기능 구현 */
const getCandidats = (quest) => {
  const ranks = quest.map((item) => item.split(' ').map(Number));
  ranks.sort((a, b) => {
    return a[0] - b[0];
  });

  let candidateCnt = 0;
  let min = ranks[0][1];

  for (let i = 0; i < ranks.length; i++) {
    if (ranks[i][1] <= min) {
      candidateCnt++;
      min = ranks[i][1];
    }
  }

  console.log(candidateCnt);
};

/** solution 함수 정의  */
function solution() {
  const quests = [];

  while (inputs.length > 0) {
    const volunteerCnt = Number(inputs.shift());
    const ranks = inputs.splice(0, volunteerCnt);
    quests.push(ranks);
  }

  for (let i = 0; i < T; i++) {
    getCandidats(quests[i]);
  }
}

/** solution 함수 호출 */
solution();
