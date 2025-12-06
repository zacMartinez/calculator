const funnyError = '😠Get out of my swamp!😠'
let operandX;
let operandY;
let operator;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return  x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    switch (operator) {
        case '*':
            return multiply(x, y);
        case '/':
            if (y === 0) return funnyError;
            return divide(x, y);
        case '+':
            return add(x, y);            
        case '-':
            return subtract(x, y);
        default:
            return 'Invalid operation';
    }
}