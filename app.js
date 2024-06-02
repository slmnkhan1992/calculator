const display = document.querySelector("#display");

function numberHandler(input) {
  display.value += input;
}

function clearHandler() {
  display.value = "";
}

function equalHandler() {
  try {
    // Using eval to evaluate the expression entered in the display
    display.value = eval(display.value);
  } catch (error) {
    // If there's an error in the expression, display "Error"

    display.value = "Error";
  }
}
