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
    console.error("Error: Division by zero is not allowed.");
    return null;
  }
  return a / b;
}

let firstNumber = null;
let operator = null;
let secondNumber = null;

function operate(firstNumber, operator, secondNumber) {
  if ((operator = add)) {
    return add(firstNumber, secondNumber);
  }
  if ((operator = subtract)) {
    return subtract(firstNumber, secondNumber);
  }
  if ((operator = multiply)) {
    return multiply(firstNumber, secondNumber);
  }
  if ((operator = divide)) {
    return divide(firstNumber, secondNumber);
  }
}

let displayValue = "";

function updateDisplay(value) {
  displayValue += value;
  document.getElementById("output").textContent = displayValue;
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    updateDisplay(button.textContent);
  });
});
