// Find largest ractangle in histogram

/*
    Bruteforce solution
*/

const findNSE = function(arr){
    let st = [];
    let n = arr.length;
    let nse = new Array(n).fill(n);
    
    for (let i = 0; i < n; i++){
        while(st.length !== 0 && arr[st[st.length-1]] > arr[i]){
            nse[st.pop()] = i;
        }
        st.push(i);
    }
    return nse;
}

const findPSE = function(arr){
    let n = arr.length;
    let st = [];
    let pse = new Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--){
        while(st.length !== 0 && arr[st[st.length-1]] >= arr[i]){
            pse[st.pop()] = i;
        }
        st.push(i);
    }
    return pse;
}

const largestRactangle = function(heights){
    let nse = findNSE(heights);
    let pse = findPSE(heights);
    let n = heights.length;
    let maxi = 0;

    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi,heights[i] * (nse[i] - pse[i] - 1))
    }
    return maxi;
}


/*
    Optimal solution
*/

const largestRactangleOptimal = function(heights){
    let st = [];
    let maxArea = 0;
    let n = heights.length;
    
    for (let i = 0; i < n; i++){
        while(st.length !== 0 && heights[st[st.length - 1]] > heights[i]){
            let element = st.pop();
            let nse = i;
            let pse = st.length === 0 ? -1 : st[st.length-1];
            maxArea = Math.max(heights[element] * (nse - pse - 1), maxArea);
        }
        st.push(i);
    }

    while(st.length !== 0){
        let nse = n;
        let element = st.pop();
        pse = st.length === 0 ? -1 : st[st.length-1];
        maxArea = Math.max(maxArea, (nse - pse -1) * heights[element])
    }

    return maxArea;
}


heights = [2,1,5,6,2,3]
console.log(largestRactangleOptimal(heights));