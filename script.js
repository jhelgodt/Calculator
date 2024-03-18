function add(a, b) {
  return Number(a) + Number(b);
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
console.log(operate(firstNumber, operator, secondNumber));

function updateDisplay(value) {
  displayValue += value;
  document.getElementById("output").textContent = displayValue;
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  console.log(operate(firstNumber, operator, secondNumber));
}
function clearDisplay() {
  displayValue = "";
  document.getElementById("output").textContent = displayValue;
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  console.log(operate(firstNumber, operator, secondNumber));
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber != null && secondNumber == null) {
      clearDisplay();
    }
    if (operator != null) {
      secondNumber = document.getElementById("output").textContent;
    }

    updateDisplay(button.textContent);
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    console.log(operate(firstNumber, operator, secondNumber));
  });
});
document.querySelectorAll(".buttonOperator").forEach((button) => {
  button.addEventListener("click", () => {
    firstNumber = displayValue;
    operator = button.textContent;
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    console.log(operate(firstNumber, operator, secondNumber));
  });
});

document.querySelector(".buttonEqual").addEventListener("click", (button) => {
  secondNumber = displayValue;
  clearDisplay();
  document.getElementById("output").textContent = operate(
    firstNumber,
    operator,
    secondNumber
  );
  firstNumber = null;
  operator = null;
  secondNumber = null;
  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
  console.log(operate(firstNumber, operator, secondNumber));
});
