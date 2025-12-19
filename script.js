const MAX_DECIMAL = 4;
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

