function solution(sides) {
    var answer = 2;
    const max = Math.max.apply(null, sides);
    const sum = sides.reduce((a,b) => a+b);
    
    if(sum > max*2) answer = 1;
   
    return answer;
}