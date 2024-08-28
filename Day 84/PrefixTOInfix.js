// prefix to infix


class Solution {
    // Function to convert prefix expression to infix expression.
    preToInfix(pre_exp) {
        // Initialize an empty stack
        let stack = [];

        // Traverse the prefix expression from right to left
        for (let i = pre_exp.length - 1; i >= 0; i--) {
            let c = pre_exp[i];

            // If the character is an operand, push it to the stack
            if (this.isOperand(c)) {
                stack.push(c);
            }
            // If the character is an operator
            else {
                // Pop two operands from the stack
                let operand1 = stack.pop();
                let operand2 = stack.pop();

                // Combine them in an infix manner and push the result back to the stack
                let infixExpression = `(${operand1}${c}${operand2})`;
                stack.push(infixExpression);
            }
        }

        // The stack will have the full infix expression
        return stack.pop();
    }

    // Helper function to check if a character is an operand
    isOperand(c) {
        // Check if the character is a letter or a number
        return /[a-zA-Z0-9]/.test(c);
    }
}

let solution = new Solution();
let prefixExpression = "*+AB-CD";
let infixExpression = solution.preToInfix(prefixExpression);
console.log("Infix expression:", infixExpression);