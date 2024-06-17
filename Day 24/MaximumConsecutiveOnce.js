//Maximum consecutive once


let nums = [1,0,1,1,0,1];


const maximumConsecutiveOnce = function(){
    let count = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 1){
            count++;
            ans = Math.max(ans,count);
        }
        else{
            count = 0;
        }
    }
    return ans;
}


console.log(maximumConsecutiveOnce(nums))