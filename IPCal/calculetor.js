 // Variables to store calculator data
let currentInput = '';
let operator = '';
let firstOperand = null;

// Elements from the DOM
const display = document.getElementById('display');
const operationScreen = document.getElementById('operation');

// Function to clear the display and reset calculator variables
function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.innerText = '0';
    operationScreen.innerText = '';
}

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
} 
function operate(op) {
    if (currentInput !== '') {
        if (operator !== '') {
            calculate();
            operationScreen.innerText = `${firstOperand} ${operator} ${currentInput} ${op}`; // Show ongoing operation
        } else {
            firstOperand = parseFloat(currentInput);
            operationScreen.innerText = `${firstOperand} ${op}`; // Show the first operand and the operator
        }
        operator = op;
        currentInput = '';
    }
}

// Function to perform calculation based on the operator selected
function calculate() {
    const secondOperand = parseFloat(currentInput);
    let result = '';

    // Perform operation based on the selected operator using a switch statement
    switch (operator) {
        case '+':
            result = (firstOperand + secondOperand).toString();
            break;
        case '-':
            result = (firstOperand - secondOperand).toString();
            break;
        case '*':
            result = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result = (firstOperand / secondOperand).toString();
            }
            break;
        case '%':
            result = (firstOperand % secondOperand).toString();
            break;
        default:
            break;
    }

    // Display the result on the calculator screen
    display.innerText = result;
    operationScreen.innerText = `${firstOperand} ${operator} ${secondOperand} = ${result}`;

    // Reset calculator variables
    operator = '';
    firstOperand = null;
    currentInput = result; // Store the result for further calculations
}
