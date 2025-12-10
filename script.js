const funnyError = '😠Get out of my swamp!😠'
const buttons = document.querySelector('#buttons');
const inputDisplay = document.querySelector('#input');
const operators = ['+', '-', '*', '/'];
const buffer = [];
let X;
let Y;
let operator;

const xDisplay = document.querySelector('#x');
const yDisplay = document.querySelector('#y');
const operatorDisplay = document.querySelector('#operator');

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

function parseBuffer() {
    X = 0;
    Y = 0;

    let xEnd = false;
    buffer.forEach((char) => {
        if (/[0-9]/.test(char)) {
            if (xEnd) {
                Y = Number.parseFloat (Y + char);
            } else {
                X = Number.parseFloat(X + char);
            }
        } else if (operators.includes(char)) {
            xEnd = true;
            operator = char;
        }
    });
}

function updateVarDisplay() {
    xDisplay.textContent = X;
    yDisplay.textContent = Y;
    operatorDisplay.textContent = operator;
}

buttons.addEventListener('click', (e) => {
    if (e.target.value === 'clear') {
        buffer.splice(0, buffer.length);
    } else if (e.target.value === '=') {
        buffer.splice(0, buffer.length);
        buffer.push(operate(X, Y, operator));
        X = 0;
        Y = 0;
        operator = null;
    } else {
        buffer.push(e.target.value);
    }
    inputDisplay.value = buffer.join('');
    parseBuffer();

    updateVarDisplay();
});