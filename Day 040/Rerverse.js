// Reverse pairs

let nums = [2,4,3,5,1];

/*
    *** Bruteforce solution ***
*/

const reversePairsBruteForce = function (nums){
    let n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++ ){
            if (nums[i] > 2 * nums[j]){
                cnt++;
            }
        }
    }
    return cnt;
}


console.log(reversePairsBruteForce(nums));


/*
    *** Optimal solution ***
*/


/*
    *** Merge sort ***
*/



const merge = function(nums,low,mid,high){
    let temp = [];
    let left = low;
    let right = mid+1;

    while(left <= mid && right <= high){
        if(nums[left] <= nums[right]){
            temp.push(nums[left]);
            left++;
        }
        else{
            temp.push(nums[right]);
            right++;
        }
    }

    while(left<=mid){
        temp.push(nums[left]);
        left++;
    }

    while(right <= high){
        temp.push(nums[right]);
        right++;
    }

    for (let i=low; i <= high; i++){
        nums[i] = temp [i-low];
    }
}

const coutPairs = function (nums, low, mid, high){
    let right = mid + 1;
    let count = 0;
    for (let i = low; i <= mid; i++){
        while(right <= high && nums[i] > 2 * nums[right]) right++;
        count += (right - (mid+1))
    }
    return count;
}


const ms = function(nums,low,high){
    let count = 0;
    if(low >= high) return count;

    let mid = Math.floor((low + high)/2);
    count += ms(nums,low,mid);
    count += ms(nums,mid+1,high);
    count += coutPairs(nums,low,mid,high);
    merge(nums,low,mid,high);
    return count;

}


const reversePairsBetter = function (nums){
    let n = nums.length;
    return ms(nums,0,n-1)
}

console.log(reversePairsBetter(nums))