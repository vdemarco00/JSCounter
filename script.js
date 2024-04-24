const counterTextElem = document.getElementById("counter-text");
const counterButtonElem = document.getElementById("counter-button");
const counterResetButtonElem = document.getElementById("counter-reset-button");
let currentNum = 0;

counterButtonElem.addEventListener("click", AddToCounter);
counterResetButtonElem.addEventListener("click", ResetCounter);
SetCounterLabelText();

function AddToCounter() {
    currentNum++;
    SetCounterLabelText();
}

function SetCounterLabelText() {
    counterTextElem.innerHTML = currentNum.toString();
}

function ResetCounter() {
    currentNum = 0;
    SetCounterLabelText();
}