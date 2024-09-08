// Longest repeating character replacement

/*
    Bruteforce solution
*/

const characterReplacement = function(s,k){
    let l = 0;
    let maxLen = 0;
    let maxCount = 0;
    let freq = new Array(26).fill(0);

    for (let r = 0; r < s.length; r++) {
        let index = s[r].charCodeAt(0) - 'A'.charCodeAt(0);
        freq[index]++;

        maxCount = Math.max(maxCount, freq[index]);

        let windowSize = r - l + 1;
        let changes = windowSize - maxCount;

        if (changes > k) {
            freq[s[l].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}


/*
    Optimal solution
*/

const characterReplacementOptimal = function(s,k){
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let maxFreq = 0;
    let hash = new Array(26).fill(0);

    while(r < s.length){
        let index = s[r].charCodeAt(0) - 'A'.charCodeAt(0);
        hash[index]++;
        maxFreq = Math.max(maxFreq, hash[index]);

        while((r-l+1) - maxFreq > k){
            hash[s[l].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            l++;
            maxFreq = Math.max(...hash);
        }

        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    
    return maxLen;
}

let s = "ABAB"
let k = 2
console.log(characterReplacementOptimal(s,k));