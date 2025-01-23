const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath =
  // process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const box = inputs[0].split(' ')
const boxKindCnt = inputs[1]
let length = +box[0]
let width = +box[1]
let height = +box[2]
const cubes = Array(20).fill(0);

/** 기능 구현 */
/** 박스에 들어갈 수 있는 가장 큰 큐브 인덱스 조회 */
function getMaxsizeCubeIndex(size) {
  let i=0;
  while(Math.pow(2, i) <= size) {
    i++
  }

  return i-1;
}

/** solution 함수 정의  */
function solution() {
  const boxVolume = length*width*height;
  let usedCubeCnt = 0; // 사용한 큐브 개수

  for(let i=0; i<boxKindCnt; i++) {
    const [size, cnt] = inputs[i+2].split(' ')
    cubes[size] = +cnt;
  }

  let filledCubeCnt = 0 // 이미 채워진 큐브(큰 큐브)를 채우려는 큐브로 치환한 개수
  let cubeIndex = getMaxsizeCubeIndex(Math.min(length, width, height))
  for(let i=cubeIndex; i>=0; i--) {
    const cubeWidth = Math.pow(2,i)
    filledCubeCnt *= 8 // 큰 큐브는 작은큐브의 8배로 대체

    // 남은 박스 영역을 최대로 채울 수 큐브 수 = 박스에 채울 수 있는 큐브 개수 - 이미 채운 큐브 수(큰 큐브들로 채워진 부피를 본인 큐브 개수로 치환하여 계산)
    const maxUsageCubeCnt =  Math.floor(length/cubeWidth)*Math.floor(width/cubeWidth)*Math.floor(height/cubeWidth) - filledCubeCnt
    const realCubeUsage = Math.min(maxUsageCubeCnt, cubes[i]) // 실제 사용할 수 있는 큐브 개수
    usedCubeCnt += realCubeUsage
    filledCubeCnt += realCubeUsage
  }

  if(filledCubeCnt === boxVolume) console.log(usedCubeCnt)
  else console.log(-1)
}

/** solution 함수 호출 */
solution();
