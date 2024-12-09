// Merge sorted array 


let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

const mergeSortArray = function (nums1, m, nums2, n) {
    let arr3 = new Array(m + n);
    let left = 0;
    let right = 0;
    let index = 0;

    while (left < m && right < n) {
        if (nums1[left] <= nums2[right]) {
            arr3[index] = nums1[left];
            left++;
        } else {
            arr3[index] = nums2[right];
            right++;
        }
        index++;
    }

    while (left < m) {
        arr3[index++] = nums1[left++];
    }

    while (right < n) {
        arr3[index++] = nums2[right++];
    }

    // Copy arr3 to nums1
    for (let i = 0; i < m + n; i++) {
        nums1[i] = arr3[i];
    }

    return nums1;
}

console.log(mergeSortArray(nums1, m, nums2, n));
