// Prefix to postfix

const prefixToPOstfix = function (pre_exp) {
    let stack = [];
    
    // Read the expression from right to left
    for (let i = pre_exp.length - 1; i >= 0; i--) {
        let char = pre_exp[i];
        
        // If the character is an operand, push it to the stack
        if (isOperand(char)) {
            stack.push(char);
        } 
        // If the character is an operator
        else {
            // Pop the top two operands from the stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            
            // Form the new postfix expression
            let newExpression = operand1 + operand2 + char;
            
            // Push the new postfix expression back to the stack
            stack.push(newExpression);
        }
    }
    
    // The final result will be the only element in the stack
    return stack.pop();
}

const isOperand = function(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';
}

let prefixExpression = "*+AB-CD";
console.log(prefixToPOstfix(prefixExpression));