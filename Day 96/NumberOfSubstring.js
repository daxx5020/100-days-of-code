// Number of subsstring containing all three characters

/*  
    Bruteforce solution
*/

const numberOfSubstringsBruteforce = function(s){
    let n = s.length;
    let cnt = 0;
    for (let i = 0; i < n; i++){
        let hash = new Array(3).fill(0);
        for (j = i; j < n; j++){
            hash[s[j].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;

            if (hash[0] + hash[1] + hash[2] === 3){
                cnt += n - j;
                break;
            }
        }
    }
    return cnt;
}


const numberOfSubstrings = function(s){
    let n = s.length;
    let lastseen = [-1,-1,-1];
    let cnt = 0;

    for (let i = 0; i < n; i++){
        lastseen[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
        if (lastseen[0] !== -1){
            cnt = cnt + (1 + Math.min(lastseen[0],lastseen[1],lastseen[2]));
        }
    }

    return cnt;
}

s = "abcabc"
console.log(numberOfSubstrings(s))