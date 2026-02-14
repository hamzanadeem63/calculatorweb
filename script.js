const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

/* Handle Button Clicks */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("btn-clear")) {
      clearDisplay();
    }
    else if (button.classList.contains("btn-delete")) {
      deleteLast();
    }
    else if (button.classList.contains("btn-equal")) {
      calculate();
    }
    else {
      appendValue(value);
    }
  });
});

/* Add Value */
function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

/* Clear Screen */
function clearDisplay() {
  display.innerText = "0";
}

/* Delete Last Character */
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

/* Calculate Result */
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

/* ===== Keyboard Support ===== */
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  }
  else if (key === "Enter") {
    calculate();
  }
  else if (key === "Backspace") {
    deleteLast();
  }
  else if (key === "Escape") {
    clearDisplay();
  }
});
