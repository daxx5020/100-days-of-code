//Next Permutation Problem

let A = [1,3,2]

const nextGreaterPermutation = function(A) {
    let ind = -1;
    const n = A.length;

    for (let i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            ind = i;
            break;
        }
    }

    if (ind === -1) {
        A.reverse();
        return A;
    }

    for (let i = n - 1; i > ind; i--) {
        if (A[i] > A[ind]) {
            [A[i], A[ind]] = [A[ind], A[i]];
            break;
        }
    }

    reverseArray(A, ind + 1, n - 1);

    return A;
}

const reverseArray = function(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}



console.log(nextGreaterPermutation(A));