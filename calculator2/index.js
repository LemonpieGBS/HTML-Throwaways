
const display = document.getElementById("calcDisplay");

let display_value = "";

function setDisplay() { display.textContent = display_value; }

function appendToDisplay(input) {
    display_value += input;
    setDisplay();
}

function clearDisplay() {
    display_value = "";
    setDisplay();
}

function calculate() {

    if(display_value == "ERROR" || display_value == "") return;

    try {
        display_value = eval(display_value);
    } catch(error) {
        display_value = "ERROR";
    }

    setDisplay();
}