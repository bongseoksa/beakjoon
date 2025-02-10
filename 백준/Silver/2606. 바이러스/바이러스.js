const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');

const computerCnt = +inputs[0]
const pairCnt = +inputs[1]
const graph = [];
const visited = Array(computerCnt+1).fill(false);
let cnt = 0;
for(let i=0; i<=computerCnt; i++) {
    graph[i] = []
}

for(let i=0; i<pairCnt; i++) {
    const [com1, com2] = inputs[i+2].split(' ').map(Number)
    graph[com1].push(com2)
    graph[com2].push(com1)
}


/** 문제 풀이 */
function solution(com) {
    visited[com] = true;
    cnt++;

    for(x of graph[com]) {
        if(!visited[x]) solution(x)
    }
}

// 케이스별 진행
solution(1)
console.log(cnt-1)