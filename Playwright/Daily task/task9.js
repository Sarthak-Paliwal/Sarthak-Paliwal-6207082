const display = document.querySelector(".result");
const btns = document.querySelectorAll(".cont");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function calculate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  switch (operator) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num2 !== 0 ? num1 / num2 : "Error";
    default: return num2;
  }
}

function updateDisplay() {
  display.innerText = firstNumber + operator + secondNumber || "0";
}

btns.forEach((button) => {
  button.addEventListener("click", function () {
    const value = this.innerText.trim();

    if (value === "clear") {
      firstNumber = "";
      operator = "";
      secondNumber = "";
      updateDisplay();
      return;
    }

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (firstNumber !== "") {
        operator = value; 
      }
      updateDisplay();
      return;
    }

    if (value === "=") {
      if (firstNumber && operator && secondNumber) {
        const result = calculate();

        if (result === "Error") {
          display.innerText = "Error";
          firstNumber = "";
          operator = "";
          secondNumber = "";
          return;
        }

        display.innerText = result;
        firstNumber = result.toString();
        operator = "";
        secondNumber = "";
      }
      return;
    }

    if (!operator) {
      firstNumber += value;
    } else {
      secondNumber += value;
    }

    updateDisplay();
  });
});