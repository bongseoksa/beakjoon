const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '\\example.txt';
const inputStr = fs.readFileSync(filePath).toString().trim();
const inputs = inputStr.split('\n');

const [N, M] = inputs[0].split(' ').map(Number)

const houses = [];
const shops = [];
for(let i=0; i<N; i++){
    const row = inputs[i+1].split(' ').map(Number)
    for(let j=0; j<row.length; j++) {
        if(row[j] === 1) houses.push([i, j])
        if(row[j] === 2) shops.push([i, j])
    }
}

// M개의 가게 선택
let answer = Infinity;
const selectedShopIndex = []
const visited = Array(shops.length).fill(false)
function dfs(depth, start) {
    if(depth === M) {
        let sum = 0;
        for(let i=0; i<houses.length; i++) {
            let min = Infinity
            const [r1, c1] = houses[i]

            for(let j=0; j<selectedShopIndex.length; j++) {
                const [r2, c2] = shops[selectedShopIndex[j]]
                min = Math.min(min, Math.abs(r1 - r2) + Math.abs(c1 - c2))
            }
            sum += min;
        }
        answer = Math.min(answer, sum)
        return
    }

    for(let i=start; i<shops.length; i++) {
        if(visited[i]) continue

        visited[i] = true
        selectedShopIndex.push(i)
        dfs(depth+1, i+1)
        visited[i] = false
        selectedShopIndex.pop()
    }
}
dfs(0,0)
console.log(answer)