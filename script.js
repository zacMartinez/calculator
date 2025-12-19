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

function symbolHandler(symbol) {
    console.log(symbol);
;}

buttons.addEventListener('click', (e) => {
    const inputValue = e.target.value;
    
    switch (true) {
        case inputValue === 'clear' :
            BUFFER.splice(0, BUFFER.length);
            break;
        case inputValue === 'backspace' :
            BUFFER.pop(1);
            break;
        case operations.keys().includes(inputValue) :
            symbolHandler(inputValue);
            break;
        default :
            BUFFER.push(e.target.value);
    }
    
    inputDisplay.value = BUFFER.join('');
});
