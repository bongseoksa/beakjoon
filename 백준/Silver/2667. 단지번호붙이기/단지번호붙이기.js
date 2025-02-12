const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');
const N = +inputs[0]

const graph = []
for(let i=0; i<N; i++) {
    graph[i] = inputs[i+1].split('').map(Number)
}

const town = []

function checkTown(r, c) {
    if(r < 0 || c < 0 || r >= N || c >= N) return 0;

    if(graph[r][c] === 1) {
        graph[r][c] = -1
        let result = 1
        result += checkTown(r-1, c)
        result += checkTown(r+1, c)
        result += checkTown(r, c-1)
        result += checkTown(r, c+1)
        return result
    }
    return 0

}

for(let i=0; i<graph.length; i++) {
    for(let j=0; j<graph[i].length; j++) {
        const result = checkTown(i, j)
        if(result !== 0)town.push(result)
    }
}
const answer = ''+town.length + '\n' + town.sort((a,b) => a-b).join('\n')
console.log(answer)