// Implement upper bound

let n = 8;
let x = 10;
let arr = [5, 6, 8, 9, 6, 5, 5, 6];


function findFloorAndCeil(arr, n, x) {
    let floor = -1;
    let ceil = -1;

    for (let i = 0; i < n; i++) {
        if (arr[i] <= x) {
            if (floor === -1 || arr[i] > arr[floor]) {
                floor = i;
            }
        }
        if (arr[i] >= x) {
            if (ceil === -1 || arr[i] < arr[ceil]) {
                ceil = i;
            }
        }
    }

    return [
        floor !== -1 ? arr[floor] : -1,
        ceil !== -1 ? arr[ceil] : -1
    ];
}

const result1 = findFloorAndCeil(arr, n, x);
console.log(`Floor of ${x} is ${result1[0]} and ceil of ${x} is ${result1[1]}`); 


