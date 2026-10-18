// Basic math functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error" : a / b; }

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}

// Get elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// State variables
let currentInput = "0";
let firstNumber = null;
let operator = null;
let resetDisplay = false;

// Update display function
function updateDisplay() {
    display.textContent = currentInput;
}

// Button click logic
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        // Number button logic (0-9 and .)
        if (button.classList.contains('number')) {
            if (resetDisplay) {
                currentInput = value;
                resetDisplay = false;
            } else {
                currentInput = (currentInput === "0" && value !== ".") ? value : currentInput + value;
            }
        }

        // Operator button logic (+, -, *, /)
        if (button.classList.contains('operator') && value !== "AC" && value !== "=") {
            if (firstNumber !== null && operator !== null) {
                currentInput = String(operate(operator, firstNumber, currentInput));
                firstNumber = currentInput;
            } else {
                firstNumber = currentInput;
            }
            operator = value;
            resetDisplay = true;
        }

        // Equals button logic
        if (value === "=" && firstNumber !== null && operator !== null) {
            currentInput = String(operate(operator, firstNumber, currentInput));
            firstNumber = null;
            operator = null;
            resetDisplay = true;
        }

        // AC button logic
        if (value === "AC") {
            currentInput = "0";
            firstNumber = null;
            operator = null;
            resetDisplay = false;
        }

        updateDisplay();
    });
});
