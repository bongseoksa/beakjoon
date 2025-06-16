function solution(babbling) {
    var answer = 0;
    let words = ['aya', 'ye', 'woo', 'ma'];
    
    for(let i=0; i<babbling.length; i++) {
        let babble = babbling[i];
        for(let j=0; j<words.length; j++) {
            babble = babble.replace(words[j], ' ');
        }
        
        if(babble.trim() === '') answer++;
    }
    
    return answer;
}