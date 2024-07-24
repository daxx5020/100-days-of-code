// Median of sorted array


let nums1 = [1,3]
let nums2 = [2]

/*
    Bruteforce solution
*/

const medianOfSortedArray = function(nums1, nums2){
    let nums3 = [];
    let n1 = nums1.length;
    let n2 = nums2.length;
    let i = 0;
    let j = 0;

    while(i < n1 && j < n2){
        if (nums1[i] < nums2[j]){
            nums3.push(nums1[i]);
            i++;
        }
        else{
            nums3.push(nums2[j]);
            j++;
        }
    }
    while(i < n1) nums3.push(nums1[i++]);
    while (j < n2) nums3.push(nums2[j++]);

    let n = n1 + n2;
    if (n%2 == 1){
        return nums3[Math.floor(n / 2)];
    }

    const median = (nums3[n / 2] + nums3[(n / 2) - 1]) / 2.0;
    return median;

}

console.log(medianOfSortedArray(nums1, nums2));


/*
    Better solution
*/

const medianOfSortedArrayBetter = function(nums1, nums2){
    const n1 = nums1.length, n2 = nums2.length;
    const n = n1 + n2; // total size
    // required indices:
    const ind2 = Math.floor(n / 2);
    const ind1 = ind2 - 1;
    let cnt = 0;
    let ind1el = -1, ind2el = -1;

    // apply the merge step:
    let i = 0, j = 0;
    while (i < n1 && j < n2) {
        if (nums1[i] < nums2[j]) {
            if (cnt === ind1) ind1el = nums1[i];
            if (cnt === ind2) ind2el = nums1[i];
            cnt++;
            i++;
        }
        else {
            if (cnt === ind1) ind1el = nums2[j];
            if (cnt === ind2) ind2el = nums2[j];
            cnt++;
            j++;
        }
    }

    // copy the left-out elements:
    while (i < n1) {
        if (cnt === ind1) ind1el = nums1[i];
        if (cnt === ind2) ind2el = nums1[i];
        cnt++;
        i++;
    }
    while (j < n2) {
        if (cnt === ind1) ind1el = nums2[j];
        if (cnt === ind2) ind2el = nums2[j];
        cnt++;
        j++;
    }

    // Find the median:
    if (n % 2 === 1) {
        return ind2el;
    }

    return (ind1el + ind2el) / 2.0;
}

console.log(medianOfSortedArrayBetter(nums1, nums2));