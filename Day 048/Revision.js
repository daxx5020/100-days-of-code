// Revison of last bimary search solution

/*
    Simple binary search algorithm
*/

let nums = [1,2,4,4,7,12]
let target = 12;

const binarySearch = function (nums,target){
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high){
        let mid = Math.floor((low + high)/2);
        if (nums[mid] === target) return mid;
        if(target <= nums[mid]){
            high = mid -1;
        }
        else{
            low = mid +1;
        }
    }
}


console.log(binarySearch(nums,target));

/*
    First and last occurence in the array
*/


let x = 2;
let arr = [1, 1, 2, 2, 2, 2, 3];


const lowerBound = function(arr,x){
    let n = arr.length;
    let low = 0;
    let high = n -1;
    let ans = n;
    while (low <= high){
        let mid = Math.floor((high + low)/2);
        if (arr[mid] >= x){
            ans  = mid;
            high = mid -1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}

const upperBound = function(arr,x){
    let n = arr.length;
    let low = 0;
    let high = n -1;
    let ans = n;
    while (low <= high){
        let mid = Math.floor((high + low)/2);
        if (arr[mid] > x){
            ans  = mid;
            high = mid -1;
        }
        else{
            low = mid + 1;
        }
    }
    return ans;
}


const firstAndLastOccurrence = function (arr, x){
    let n = arr.length;
    let lb = lowerBound(arr,x);
    let ub = upperBound(arr,x);
    if (lb === n || arr[lb] != x) return [-1,-1];
    return [lb, ub - 1];
}

console.log(firstAndLastOccurrence(arr,x));


/*
    Search in rotated sorted array
*/

let arr1 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let s = 12;

const searchInRotatedArray = function(arr1, s){
    let n = arr1.length;
    let low = 0;
    let high = n - 1;

    while (low <= high){
        let mid= Math.floor((low + high)/2);
        if (arr1[mid] === s) return true;
        if (arr1[low] === arr1[mid] && arr1[mid] === arr1[high]){
            low++;
            high--;
        }

        if (arr1[low] <= arr1[mid]){
            if (arr1[low] <= s && s <= arr1[mid]){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }
        }

        else{
            if (arr1[mid] <= s && s <= arr1[high]){
                low = mid +1;
            }
            else{
                high = mid - 1;
            }
        }
    }
    return false
}

console.log(searchInRotatedArray(arr1, s));