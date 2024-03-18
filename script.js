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
  if ((operator = "+")) {
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

console.log(firstNumber);
console.log(operator);
console.log(secondNumber);

function updateDisplay(value) {
  displayValue += value;
  document.getElementById("output").textContent = displayValue;
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
}
function clearDisplay() {
  displayValue = null;
  document.getElementById("output").textContent = displayValue;
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber != null) clearDisplay();

    updateDisplay(button.textContent);
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
  });
});
document.querySelectorAll(".buttonOperator").forEach((button) => {
  button.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = button.textContent;
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
  });
});

document.querySelector(".buttonEqual").addEventListener("click", (button) => {
  secondNumber = displayValue;
  updateDisplay(button.textContent);
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
});
