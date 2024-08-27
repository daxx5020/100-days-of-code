// Check for balanced paranthesis

const balancedParanthesis = function(s){
    let stack = [];

    for (let i = 0; i < s.length; i++){
        if (s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        }
        else{
            if (stack.length === 0){
                return false;
            }
            else{
                let ch = stack[stack.length - 1];
                 stack.pop();

                 if ((s[i] === ')' && ch === '(') || 
                (s[i] === ']' && ch === '[') || 
                (s[i] === '}' && ch === '{')) {
                continue;
            } else {
                return false;
            }
            }
        }
    }
    return stack.length === 0;
}