// Leaders in array


let arr = [16,17,4,3,5,2];

const leadersInArray = function (arr){
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        let leader = true;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] > arr[i]){
                leader = false;
                break;
            }
        }
        if (leader){
            ans.push(arr[i])
        }
    }
    return ans;
}

console.log(leadersInArray(arr))