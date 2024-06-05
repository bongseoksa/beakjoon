const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const N = +inputs[0];
const powers = inputs[1].split(' ').map(Number).reverse();

/** 기능 구현 */
const lowerBound = (arr, start, end, key) => {
  let index = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] < key) {
      // 더 올라가
      start = mid + 1;
    } else {
      // 더 내려가
      end = mid - 1;
      index = mid;
    }
  }

  return index;
};

/** solution 함수 정의  */
function solution() {
  let d = [0];
  for (p of powers) {
    if (d[d.length - 1] < p) {
      // 더 강한 병사 추가
      d.push(p);
    } else {
      // 약한병사와 교체
      const index = lowerBound(d, 0, d.length, p);
      d[index] = p;
    }
  }

  console.log(N - (d.length - 1));
}

/** solution 함수 호출 */
solution();
