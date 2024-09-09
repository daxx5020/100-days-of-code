// Minimum window substring

/*
    Bruteforce solution
*/

const minWindowBruteForce = function(s,t){
    let minLen = Number.MAX_SAFE_INTEGER;
    let sIndex = -1;
    let n = s.length;
    let m = t.length;


    for(let i = 0; i < n; i++){
        let hash = new Array(256).fill(0);
        let cnt = 0;

        for (let j = 0; j < m; j++){
            hash[t[j].charCodeAt(0)]++;
        }

        for (let j = i; j < n; j++){
            if (hash[s[j].charCodeAt(0)] > 0){
                cnt = cnt + 1;
            }
            hash[s[j].charCodeAt(0)]--;

            if (cnt === m){
                if (j - i + 1 < minLen){
                    minLen = j - i + 1;
                    sIndex = i;
                }
                break;
            }
        }
    }
    return sIndex === -1 ? "" : s.substring(sIndex, sIndex + minLen);
}



const minWindow = function(s,t){
    let minLen = Number.MAX_SAFE_INTEGER;
    let n = s.length;
    let m = t.length;
    let hash = new Array(256).fill(0);
    let sindex = -1;
    let l = 0; let r = 0;
    let cnt = 0;

    for (let i = 0; i < m; i++){
        hash[t[i].charCodeAt(0)]++;
    }

    while(r < n){
        if (hash[s[r].charCodeAt(0)] > 0){
            cnt++;
        }
        hash[s[r].charCodeAt(0)]--;

        while (cnt === m){
            if (r - l + 1 < minLen){
                minLen = r - l + 1;
                sindex = l;
            }

            hash[s[l].charCodeAt(0)]++;
            if (hash[s[l].charCodeAt(0)] > 0){
                cnt = cnt - 1;
            }
            l++;
        }
        r = r + 1;
    }
    return sindex === -1 ? "" : s.substring(sindex, sindex + minLen);

}

let s = "ADOBECODEBANC"
let t = "ABC"

console.log(minWindow(s,t))