// Postfix to infix

const postfixToInfix = function(postfix) {
    let stack = [];

    // Read the postfix expression from left to right
    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];

        // If the character is an operand, push it to the stack
        if (isOperand(char)) {
            stack.push(char);
        } 
        // If the character is an operator
        else {
            // Pop the top two elements from the stack
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            // Form the new infix expression with parentheses for clarity
            let newExpression = '(' + operand1 + char + operand2 + ')';

            // Push the new infix expression back to the stack
            stack.push(newExpression);
        }
    }

    // The final result will be the only element in the stack
    return stack.pop();
};

// Helper function to check if the character is an operand
const isOperand = (c) => {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';
};

let postfixExpression = "AB+C*";
console.log(postfixToInfix(postfixExpression));
