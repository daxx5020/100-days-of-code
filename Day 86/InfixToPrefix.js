// Infix to prefix

const infixToPrefix = function(infix) {
    // Reverse the infix expression
    let reversedInfix = reverseExpression(infix);

    // Convert the reversed infix expression to postfix
    let postfix = infixToPostfix(reversedInfix);

    // Reverse the postfix expression to get the prefix expression
    let prefix = reverseExpression(postfix);

    return prefix;
};

// Function to reverse an expression and swap parentheses
const reverseExpression = function(expression) {
    let reversed = "";
    for (let i = expression.length - 1; i >= 0; i--) {
        if (expression[i] === '(') {
            reversed += ')';
        } else if (expression[i] === ')') {
            reversed += '(';
        } else {
            reversed += expression[i];
        }
    }
    return reversed;
};

// Helper function to determine precedence of operators
const precedence = function(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    if (op === '^') return 3;
    return 0;
};

// Helper function to check if a character is an operand
const isOperand = function(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
};

// Convert infix expression to postfix
const infixToPostfix = function(infix) {
    let stack = [];
    let postfix = "";

    for (let i = 0; i < infix.length; i++) {
        let char = infix[i];

        // If the character is an operand, add it to the output
        if (isOperand(char)) {
            postfix += char;
        } 
        // If the character is '(', push it onto the stack
        else if (char === '(') {
            stack.push(char);
        } 
        // If the character is ')', pop and add to output from the stack until '(' is found
        else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // pop the '('
        } 
        // If an operator is encountered
        else {
            while (stack.length && precedence(char) <= precedence(stack[stack.length - 1])) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    // Pop all remaining operators from the stack
    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
};

let infixExpression = "(A-B/C)*(A/K-L)";
console.log(infixToPrefix(infixExpression));