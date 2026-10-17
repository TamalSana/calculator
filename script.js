function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

console.log("Add 5 + 3:", operate('+', 5, 3));
console.log("Subtract 10 - 4:", operate('-', 10, 4));
console.log("Multiply 6 * 7:", operate('*', 6, 7));
console.log("Divide 15 / 3:", operate('/', 15, 3));
