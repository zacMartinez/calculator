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
    switch (e.target.value) {
        case 'clear' :
            wipeBuffer();
            break;
        case '<' :
            buffer.pop(1);
            break;
        case '=' :
            evaluate();
            break;
        default:
            buffer.push(e.target.value);
    }
    inputDisplay.value = buffer.join('');
    parseBuffer();

    updateVarDisplay();
});