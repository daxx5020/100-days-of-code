//Find longest consecutive sequence from array

// *** Better solution ***

let arr = [5,8,3,2,1,4];

const longestConsecutiveSequence = function(arr){
    let n = arr.length;
    if (n == 0) return 0;
    arr.sort((a, b) => a - b);
    let lastSmaller = Number.MIN_VALUE;
    let count = 0;
    let longest = 1;

    for (let i =0; i < n; i++) {
        if (arr[i]-1 == lastSmaller){
            count +=1;
            lastSmaller = arr[i];
        }
        else if (lastSmaller != arr[i]){
            count = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest,count);
    }
    return longest;

}

console.log(longestConsecutiveSequence(arr))



// *** Optimal solution ***


const longestConsecutiveSequenceOptimal = function (arr){
    let n = arr.length;
    if (n == 0) return 0;
    let longest = 0;
    let st = new Set();

    for (let i = 0 ; i < n; i++){
        st.add(arr[i]);
    }

    for (const number of st) {
        let cnnt = 1;
        let x = number;
        while (st.has(x+1)){
            x = x+1;
            cnnt = cnnt + 1;
        }
        longest = Math.max(longest,cnnt)
    }

    return longest;
}


console.log(longestConsecutiveSequenceOptimal(arr))