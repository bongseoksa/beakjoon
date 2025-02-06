const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');

const cases = [];
const caseAnswers = [];

function isCycle( curr, prev, graph, visited) {
    visited[curr] = true;

    for(const to of graph[curr]) {
        if(visited[to] && to !== prev) return true; // 이전 방문 노드들 내에서 사이클 발생
    
        if(!visited[to] && isCycle(to, curr, graph, visited)) return true; // 현재 노드와 사이클 발생
    }

    return false;
}

/** 문제 풀이 */
function solution(caseNum, graph) {
    const visited = Array(graph.length).fill(false);
    let treeCnt = 0;


    for(let i=1; i<graph.length; i++) {
        const result = isCycle(i, -1, graph, visited)
        if(!result) treeCnt++;
    }
    
    if(treeCnt === 0) caseAnswers.push(`Case ${caseNum}: No trees.`);
    else if(treeCnt === 1) caseAnswers.push(`Case ${caseNum}: There is one tree.`);
    else caseAnswers.push(`Case ${caseNum}: A forest of ${treeCnt} trees.`);
}

// 케이스 분리
for(let i=1; i<inputs.length; i++) {
    const [n, m] = inputs[i-1].split(' ').map(Number);
    const graph = Array(n+1);
    for(let j=0; j<n+1; j++) graph[j] = [];

    for(let j=i; j<i+m; j++) {
        const [x, y] = inputs[j].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    cases.push(graph)
    i += m;
}

// 케이스별 진행
for(let i=0; i<cases.length; i++) {
    const graph = cases[i];
    solution(i+1, graph)
}

console.log(caseAnswers.join('\n'))