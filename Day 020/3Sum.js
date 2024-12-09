/* 3 Sum Problem

    ( i != j != k )

    *** Bruteforce Solution ***

*/

let arr = [-1, -1, 2, 0, 1];


// const sumProblem = function (arr){
//     let st = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++){
//             for (let k = j+1; k < arr.length; k++){
//                 if (arr[i] + arr[j] + arr[k] === 0){
//                     let temp = [arr[i],arr[i],arr[k]]
//                     temp.sort((a,b) => a-b)
//                     st.add(JSON.stringify(temp))
//                 }
//             }
//         }
//     }
//     let ans = [];
//     st.forEach(item => {
//         ans.push(JSON.parse(item));
//     });
//     return ans;
// } 


// console.log(sumProblem(arr))



// *** Better Solution ***


const sumProblemBetter = function (arr){
    let st = new Set();
    for (let i = 0; i< arr.length; i++){
        hashset = new Set();
        for (let j = i+1; j < arr.length; j++){
            let third = -(arr[i] + arr[j]);
            if (hashset.has(third)){
                let temp = [arr[i], arr[j], third]
                temp.sort((a,b) => a-b)
                st.add(JSON.stringify(temp))
            }
            hashset.add(arr[j]);
        }
    }
    let ans = [];
    st.forEach(item => {
        ans.push(JSON.parse(item));
    });
    return ans; 
}


console.log(sumProblemBetter(arr))