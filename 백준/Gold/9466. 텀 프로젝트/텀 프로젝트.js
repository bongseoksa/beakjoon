const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');

const T = +inputs[0];

function dfs(node, student, visited, done) {
    let cycleCount = 0;
    let stack = [];
    
    while (true) {
        if (visited[node]) {
            // 이미 방문했던 노드를 다시 방문 → 사이클 발견
            if (!done[node]) {
                // 사이클에 포함된 노드 수 계산
                let idx = stack.indexOf(node);
                cycleCount = stack.length - idx;
            }
            break;
        }

        visited[node] = true;
        stack.push(node);
        node = student[node];
    }

    // 사이클에 속한 노드는 다시 방문할 필요 없음
    for (let s of stack) {
        done[s] = true;
    }

    return cycleCount;
}

let testCnt = 0;
while (testCnt < T) {
    testCnt++;

    const n = +inputs[testCnt * 2 - 1];
    const student = [0, ...inputs[testCnt * 2].split(' ').map(Number)]; // 1-based index

    let visited = Array(n + 1).fill(false);
    let done = Array(n + 1).fill(false);
    let cycleCnt = 0;

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            cycleCnt += dfs(i, student, visited, done);
        }
    }

    console.log(n - cycleCnt);
}