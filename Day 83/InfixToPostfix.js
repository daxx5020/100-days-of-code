// Function to return precedence of operators
function prec(c) {
    if (c === '^') {
        return 3;
    } else if (c === '/' || c === '*') {
        return 2;
    } else if (c === '+' || c === '-') {
        return 1;
    } else {
        return -1;
    }
}

// The main function to convert infix expression to postfix expression
function infixToPostfix(s) {
    let st = []; // Using an array as a stack
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        // If the scanned character is an operand, add it to output string.
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
            result += c;
        }
        // If the scanned character is ‘(‘, push it to the stack.
        else if (c === '(') {
            st.push('(');
        }
        // If the scanned character is ‘)’, pop and add to output string from the stack until an ‘(‘ is encountered.
        else if (c === ')') {
            while (st.length !== 0 && st[st.length - 1] !== '(') {
                result += st.pop();
            }
            if (st.length !== 0) {
                st.pop();
            }
        }
        // If an operator is scanned
        else {
            while (st.length !== 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                result += st.pop();
            }
            st.push(c);
        }
    }

    // Pop all the remaining elements from the stack
    while (st.length !== 0) {
        result += st.pop();
    }

    return result;
}

let exp = "(p+q)*(m-n)";
console.log("Infix expression: " + exp);
infixToPostfix(exp);
