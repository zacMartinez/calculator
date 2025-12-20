const MAX_DECIMAL = 4;
const BUFFER = [];

const buttons = document.querySelector('#buttons');
const inputDisplay = document.querySelector('#inputDisplay');

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

let X = 0;
let Y = 0;
let operator = null;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    return +(operations[operator](x, y)).toFixed(MAX_DECIMAL); // +() ensures value is a number
}

function evaluateBuffer() {
   console.log(`X:${X}, Y:${Y}, operator:${operator}`);
}

function handleNonNumeric(input) {
    const operators = Object.keys(operations);

    if (operators.includes(input)) {
        if (BUFFER.length > 0) {
            operator ||= input;
        }
    }
}

buttons.addEventListener('click', (e) => {
    const inputValue = e.target.value;

    switch (true) {
        case inputValue === 'clear' :
            BUFFER.splice(0, BUFFER.length);
            break;
        case inputValue === 'backspace' :
            BUFFER.pop(1);
            break;
        case /[0-9]/.test(inputValue):
            BUFFER.push(inputValue);
            break;
        default :
            handleNonNumeric(inputValue);
    }
    
    evaluateBuffer();
    inputDisplay.value = BUFFER.join('');
});
