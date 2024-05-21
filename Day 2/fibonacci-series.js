var fib = function(n) {
    let fib_array = [];
    a = 0;
    b = 1;
    if(n == 0) return 0;
    if(n == 1) return 1;
    
    for(i=0;i<=n;i++){
        fib_array.push(a)
        let temp = a;
        a = b;
        b = temp + b;


        
    }
    return fib_array[n-1] + fib_array[n-2];

};

console.log(fib(4))