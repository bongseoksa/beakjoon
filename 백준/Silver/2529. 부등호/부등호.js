const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
let inputStr = fs.readFileSync(filePath).toString().trim();

/** 입력예제 input 값 초기화 */
let inputs = inputStr.split('\n');
const k = +inputs[0]
const signs = inputs[1].split(' ')
let visited = Array(10).fill(false)
let list = []
let min = null
let max = 0

/** 기능 구현 */

/** solution 함수 정의  */
function solution(depth) {
  if(depth === k+1) {
    let success = true;
    for(let i=0; i<signs.length; i++) {
      if(signs[i] === '<' && list[i] > list[i+1]) {
        success = false
        break
      }
      else if(signs[i] === '>' && list[i] < list[i+1]){
        success = false
        break
      }
    }
    if(success){
      if(!min) min = list.join('')
      max = list.join('')
    }

    return;
  }

  for(let i=0; i<10; i++) {
    if(visited[i]) continue

    list.push(i)
    visited[i] = true
    solution(depth+1)
    list.pop()
    visited[i] = false

  }
}

/** solution 함수 호출 */
solution(0);
console.log(max)
console.log(min)
