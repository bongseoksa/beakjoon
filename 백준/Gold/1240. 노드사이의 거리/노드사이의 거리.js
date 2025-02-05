const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');
let answer = '';

const [N, M] = inputs[0].split(' ').map(Number);
const graph = [];
for(let i=0; i<= N; i++) graph[i] = []
for(let i=1; i<N; i++) {
    const [x, y, dist] = inputs[i].split(' ').map(Number)
    graph[x].push([y, dist])
    graph[y].push([x, dist])
}

/** 문제 풀이 */
function solution(curr, end, visited,  distance) {
    if(curr === end) {
        answer += `${distance.reduce((a,b) => a+b)}\n`
    }
    visited[curr] = true;

    for(let i=0; i<graph[curr].length; i++) {
        const [y, dist] = graph[curr][i]
        
        if(visited[y]) continue;
        distance.push(dist);
        solution(y, end, visited, distance)
        distance.pop();
        visited[y] = false
    }
}

for(let i=0; i<M; i++) {
    const [x, y] = inputs[N+i].split(' ').map(Number)
    const visited = Array(N+1).fill(false)
    const distance = []
    solution(x, y, visited, distance)
}

console.log(answer)