function solution(arr, idx) {
    var answer = -1;
    while(true) {
        if(arr[idx] === 1) {
            answer = idx;
            break;
        }
        idx++;
        if(idx >= arr.length) break;
    }
    return answer;
}