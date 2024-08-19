/*
Recursion

-> When a function calls itself.
-> Until a specific condition met.

*/

const print = function (){
    console.log(1);
    print();
}

print();

/*
-> By this code it keep calling the function in stack and because of that stack will be overflow and it will throw an error that STACK OVERFLOW.
*/



let cntr = 0;
const printNumber = function (){
    if(cntr==3){return}
    console.log(cntr);
    cntr++;
    printNumber();
}

printNumber();

/*
-> This is the example of doing recursion until any specific condition met.
*/




// ***Basic recursion problem solution *** //


//print your name 5 times

let n = 5;
const PrintNames = function (n){
    if (n == 0){return}
    console.log("Hello World!");
    PrintNames(n-1);
}

PrintNames(n);



//print numbers 1 to N.

let a = 10;
let b = 1;
const PrintAcendingNumbers = function (a){
    if (a < b){return}
    console.log(b);
    b++;
    PrintAcendingNumbers(a);
}

PrintAcendingNumbers(a);



//print numbers N to 1.

let c = 10;
const PrintDecendingNumbers = function (c){
    if (c == 0){return}
    console.log(c);
    PrintDecendingNumbers(c-1);
}

PrintDecendingNumbers(c);


//print 1 to n without '+' sign

let d = 10;
let i = 10;
const PrintAceNumbers = function (i, d){
    if (i < 1){return}
    PrintAceNumbers(i-1, d);
    console.log(i);
}

PrintAceNumbers(i,d);



//print n to 1 without - sign

let e = 10;
let j = 1;
const PrintNumbers = function (j, e){
    if (j > e){return}
    PrintNumbers(j+1, e);
    console.log(j);
}

PrintNumbers(j,e);



// sum of sequence numbers example of parameterised

let O = 5;
const Sum = function(O,sum){
    if ( O < 1 ){
        console.log(sum);
        return;
    }

    Sum(O-1,sum+O);
}

Sum(O,0);


//example of functional problem of recursion

let p = 3;
const substract = function(p){
    if (p == 0) return 0;
    return substract(p-1)+p;
}

console.log(substract(p));


//factorial of n

let q = 3;
const factorial = function (q){
    if (q == 0) return 1;
    return q * factorial(q-1);
}

console.log(factorial(q));