const funnyError = '😠Get out of my swamp!😠'
const buttons = document.querySelector('#buttons');
const inputDisplay = document.querySelector('#input');
const buffer = [];
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

buttons.addEventListener('click', (e) => {
    if (e.target.value === 'clear') {
        buffer.splice(0, buffer.length);
    } else {
        buffer.push(e.target.value);
    }
    inputDisplay.value = buffer.join('');
});