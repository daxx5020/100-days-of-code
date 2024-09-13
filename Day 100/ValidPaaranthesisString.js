// Valid paranthisis string

/*
    Bruteforce solution
*/

const checkValidStringBruteforce = function(s, count = 0, index = 0) {
    if (count < 0) return false;

    if (index === s.length) {
        return (count === 0);
    }
s
    if (s[index] === '(') {
        return checkValidStringBruteforce(s, count + 1, index + 1);
    }

    if (s[index] === ')') {
        return checkValidStringBruteforce(s, count - 1, index + 1);
    }

    return checkValidStringBruteforce(s, count + 1, index + 1) ||
    checkValidStringBruteforce(s, count - 1, index + 1) ||
    checkValidStringBruteforce(s, count, index + 1);
};


/*
    Optimal solution
*/


const checkValidString = function(s) {
    let n = s.length;
    let min = 0;
    let max = 0;

    for (let i = 0; i < n; i++){
        if (s[i] === '('){
            min++;
            max++;
        }

        else if(s[i] === ')'){
            min--;
            max--;
        }

        else{
            min--;
            max++;
        }

        if (min < 0) min =0;
        if (max < 0) return false;
    }
    return min === 0;
};

let s = "(((((()*)(*)*))())())(()())())))((**)))))(()())()";
console.log(checkValidString(s));
