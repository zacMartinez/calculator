const MAX_DECIMAL = 4;
const BUFFER = [];

const buttons = document.querySelector('#buttons');
const inputDisplay = document.querySelector('#inputDisplay');

const operations = {
    '*': multiply,
    '+': add,
    '/': divide,
    '-': subtract, // subtraction needs to be at the end to avoid regex problem
};
const operators = new RegExp(`[${Object.keys(operations).join('')}]`);

let X = null;
let Y = null;
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

function reset() {
    X = null;
    Y = null;
    operator = null;
}

function evaluateExpression (x, y, operator) {
    const answer = operate(x,y, operator);
    reset();
    X = answer;
    BUFFER.splice(0);
    BUFFER.push(answer);
}

function handleDecimal(input) {
    console.log('I am a decimal.');
}

function handleOperators(input) {
    if (operator) {
        evaluateExpression(X, Y, operator);
    }
    operator = input;
    BUFFER.push(input);
    console.log('I am an operator.');
}

function handleEquals() {
    if (X && Y && operator) {
        evaluateExpression(X, Y, operator);
    }
}

function handleDigits(input) {
    BUFFER.push(input);
    const numbers = BUFFER.join('').split(operators);
    X = parseInt(numbers[0]);
    Y = parseInt(numbers[1]);
}

buttons.addEventListener('click', (e) => {
    const input = e.target.value;
    
    switch (true) {
        case input === 'clear' :
            BUFFER.splice(0);
            reset();
            break;
        case input === 'backspace' :
            BUFFER.pop(1);
            break;
        case input === '.' :
            handleDecimal(input);
            break;
        case input === '=' :
            handleEquals();
            break;
        case operators.test(input) :
            handleOperators(input)
            break;
        default :
            handleDigits(input);
            break;      
    }
    
    inputDisplay.value = BUFFER.join('');
    console.log(`X: ${X}, Y: ${Y}, operator: ${operator}`);
});
