// External JS for 18-js-dom

// Part 1: Counter Logic
let count = 0;
let counterDisplay = document.getElementById("counter");

document.getElementById("addBtn").onclick = function() {
    count++;
    counterDisplay.innerText = count;
};

document.getElementById("minusBtn").onclick = function() {
    if (count > 0) {
        count--;
    }
    counterDisplay.innerText = count;
};

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    counterDisplay.innerText = count;
};

// Part 2: Color Switcher using DOM style changes
let text = document.getElementById("myText");

document.getElementById("redBtn").onclick = function() {
    text.innerText = "Text changed to RED using DOM!";
    text.style.color = "red";
};

document.getElementById("blueBtn").onclick = function() {
    text.innerText = "Text changed to BLUE using DOM!";
    text.style.color = "blue";
};

document.getElementById("greenBtn").onclick = function() {
    text.innerText = "Text changed to GREEN using DOM!";
    text.style.color = "green";
};
