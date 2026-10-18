// Get elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

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
        //dataset.value: extracts data-value for each btn element
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
                // Calculate intermediate result
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
