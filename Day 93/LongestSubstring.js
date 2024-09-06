// Longest substring without repeating characters

/*
    Bruteforce solution
*/

const lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        let visited = new Array(256).fill(false);

        for (let j = i; j < n; j++) {
            let ascii = s.charCodeAt(j);

            if (visited[ascii]) {
                break;
            }

            visited[ascii] = true;

            let len = j - i + 1;
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
};


/*
    Optimal solution
*/

const lengthOfLongestSubstringOptimal = function(s) {
    let visited = new Array(256).fill(-1);
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let n = s.length;

    while(r < n){
        let ascii = s.charCodeAt(r);
        if (visited[ascii] !== -1 && visited[ascii] >= l){
            l = visited[ascii] + 1;
        }

        let len = r - l + 1;
        maxLen = Math.max(len,maxLen);
        visited[ascii] = r;
        r++;
    }

    return maxLen;
};


let s = "abcabcbb";
console.log(lengthOfLongestSubstringOptimal(s));