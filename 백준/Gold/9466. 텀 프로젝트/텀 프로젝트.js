const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');

const T = +inputs[0]


function isCycle(s, graph, visited, visitedMap, cycleMap) {
    let cycleNodeCnt = 0;
    if(visited[s]) {
        let start = false;
        for(let i=0; i<visitedMap.length; i++) {
            if(visitedMap[i] === s) start = true;
            if(start) {
                cycleMap.push(visitedMap[i])
                cycleNodeCnt++;
            }
        }
    }
    else {
        visited[s] = true
        visitedMap.push(s)
        cycleNodeCnt = isCycle(graph[s], graph, visited, visitedMap, cycleMap)
    }
    return cycleNodeCnt;
}

let testCnt = 0;
while(true) {
    if(testCnt === T) break;
    testCnt++;

    const n = +inputs[testCnt*2 -1]
    const student = [0, ...inputs[testCnt*2].split(' ').map(Number)]

    let cycleCnt = 0
    const visited = Array(n+1).fill(false)
    for(let i=1; i<=n; i++) {
        const visitedMap = []
        const cycleMap = []
        isCycle(i, student, visited, visitedMap, cycleMap)
        cycleCnt += cycleMap.length
    }
    console.log(n - cycleCnt)
}
