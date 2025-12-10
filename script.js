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

function resetState() {
    X = 0;
    Y = 0;
    operator = null;
}

function wipeBuffer() {
    buffer.splice(0, buffer.length);
}
    
function evaluate() {
    if (operator) {
        let answer = operate(X, Y, operator);
        wipeBuffer();
        buffer.push(...`${answer}`);
        resetState();
    }
}

function parseBuffer() {
    resetState();

    let xEnd = false;
    buffer.forEach((char, index) => {
        if (/[0-9]/.test(char)) {
            if (xEnd) {
                Y = Number.parseFloat (Y + char);
            } else {
                X = Number.parseFloat(X + char);
            }
        } else if (operators.includes(char)) {
            if (index > 0) {
                operator = char;
                xEnd = true;
            } else {
                X = char === '-' ? '-' : 0;

            } 
        }
    });
}

function updateDisplay() {

}

function updateVarDisplay() {
    xDisplay.textContent = X;
    yDisplay.textContent = Y;
    operatorDisplay.textContent = operator;
}

buttons.addEventListener('click', (e) => {
    switch (true) {
        case e.target.value === 'clear' :
            wipeBuffer();
            break;
        case e.target.value === '<' :
            buffer.pop(1);
            break;
        case e.target.value === '=' :
            evaluate();
            break;
        case e.target.value != '-' && operators.includes(e.target.value) && buffer.length < 1:
            break;
        default:
            buffer.push(e.target.value);
    }
    inputDisplay.value = buffer.join('');
    parseBuffer();

    updateVarDisplay();
});