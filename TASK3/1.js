let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function addToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  secondOperand = '';
  display.value = '';
}

function calculate() {
  let result;
  let operands = currentInput.split(operator);

  if (operands.length !== 2) {
    alert('Invalid input');
    clearDisplay();
    return;
  }

  firstOperand = parseFloat(operands[0]);
  secondOperand = parseFloat(operands[1]);

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        result = 'Infinity';
      } else {
        result = firstOperand / secondOperand;
      }
      break;
    default:
      result = 'Error';
  }

  display.value = result;
  currentInput = result.toString();
}

