// Missing and repeating


let arr = [2,2]

const missingAndRepeating = function(arr){
    let n = arr.length;
    let hash = {};

    for (let i = 0; i < n; i++){
        let number = arr[i];

        if (hash[number] !== undefined){
            hash[number]++;
        }
        else{
            hash[number] = 1
        }
    }

    for (let i = 1; i <= n; i++) {
        if (hash[i] === undefined) {
            missing = i;
        } else if (hash[i] > 1) {
            repeating = i
        }
    }

    return { missing, repeating };
}


console.log(missingAndRepeating(arr));