// Postfix to prefix

const postfixToPrefix = (post_exp) => {
    let stack = [];

    // Read the postfix expression from left to right
    for (let i = 0; i < post_exp.length; i++) {
        let char = post_exp[i];

        // If the character is an operand, push it to the stack
        if (isOperand(char)) {
            stack.push(char);
        } 
        // If the character is an operator
        else {
            // Pop the top two operands from the stack
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            // Form the new prefix expression
            let newExpression = char + operand1 + operand2;

            // Push the new prefix expression back to the stack
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

let postfixExpression = "AB+CD-*";
console.log(postfixToPrefix(postfixExpression));