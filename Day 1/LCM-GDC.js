class Solution{
    lcmAndGcd(a, b){
        function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let gcdValue = gcd(a, b);

    let lcmValue = Math.abs(a * b) / gcdValue;

   console.log(lcmValue,gcdValue);
        
    }
}