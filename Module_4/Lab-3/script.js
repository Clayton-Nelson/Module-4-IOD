let answer;
let currentOperation;

function reset() {
  document.getElementById("result").innerText = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("add").classList.remove("active");
  document.getElementById("subtract").classList.remove("active");
  document.getElementById("multiply").classList.remove("active");
  document.getElementById("divide").classList.remove("active");
}

function calculate() {
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);
  checkInputs(input1, input2);
}

function checkInputs(input1, input2) {
  document.getElementById("result").innerText = "";
  if (!input1 || !input2) {
    invalidInput();
  } else if (currentOperation == null) {
    invalidOperation();
  } else {
    calculator(input1, input2);
  }
}

function calculator(input1, input2) {
    answer = null;
  switch (currentOperation) {
    case "+":
      answer = input1 + input2;
      break;
    case "-":
      answer = input1 - input2;
      break;
    case "*":
      answer = input1 * input2;
      break;
    case "/":
      answer = input1 / input2;
      break;
    default:
      return null;
  }
  displayAnswer(input1, input2);
}

function displayAnswer(input1, input2) {
  document.getElementById("result").innerText = `the answer for ${input1} ${currentOperation} ${input2} is ${answer}`;
}

function invalidOperation() {
  document.getElementById("result").innerText =
    "No operation had been selected, please click an operation";
}

function invalidInput() {
  document.getElementById("result").innerText =
    "No input has been made under Input 1 and/or Input 2";
}

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("add").addEventListener("click", addition);
  document.getElementById("subtract").addEventListener("click", subtraction);
  document.getElementById("multiply").addEventListener("click", multiplication);
  document.getElementById("divide").addEventListener("click", division);

  function addition() {
    currentOperation = "+";
    changeactiveClass();
    console.log("operator changed to addition");
  }

  function subtraction() {
    currentOperation = "-";
    changeactiveClass();
    console.log("operator changed to subtraction");
  }

  function multiplication() {
    currentOperation = "*";
    changeactiveClass();
    console.log("operator changed to multiplication");
  }

  function division() {
    currentOperation = "/";
    changeactiveClass();
    console.log("operator changed to division");
  }

  function changeactiveClass() {
    const addition = document.getElementById("add");
    const subtraction = document.getElementById("subtract");
    const multiplication = document.getElementById("multiply");
    const division = document.getElementById("divide");

    if (currentOperation == "+") {
      addition.classList.add("active");
      subtraction.classList.remove("active");
      multiplication.classList.remove("active");
      division.classList.remove("active");
    } else if (currentOperation == "-") {
      subtraction.classList.add("active");
      addition.classList.remove("active");
      multiplication.classList.remove("active");
      division.classList.remove("active");
    } else if (currentOperation == "*") {
      multiplication.classList.add("active");
      addition.classList.remove("active");
      subtraction.classList.remove("active");
      division.classList.remove("active");
    } else {
      division.classList.add("active");
      addition.classList.remove("active");
      subtraction.classList.remove("active");
      multiplication.classList.remove("active");
    }
  }
});
