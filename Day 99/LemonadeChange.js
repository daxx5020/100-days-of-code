// Lemonade change


const lemonadeChange = function(bills){
    let n = bills.length;
    let five = 0;
    let ten = 0;

    for (let i = 0; i < n; i++){
        if (bills[i] === 5){
            five++;
        }
        else if(bills[i] === 10){
            if (five){
                five--;
                ten++;
            }
            else{
                return false;
            }
        }
        else{
            if (ten && five){
                ten--;
                five--;
            }
            else if(five >= 3){
                five -=3
            }
            else{
                return false;
            }
        }
    }
    return true;
}

let bills = [5,5,5,10,20]

console.log(lemonadeChange(bills))