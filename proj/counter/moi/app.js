let count = 0;
let value = document.getElementById("value");

function decrease() {
    count--;
    value.textContent = count;
    updateFontColor();
}

function reset() {
    count = 0;
    value.textContent = count;
    updateFontColor();
}

function increase() {
    count++;
    value.textContent = count;
    updateFontColor();
}

function updateFontColor() {
    if (count < 0) {
        value.style.color = "red";
    } else if (0 < count) {
        value.style.color = "green";
    } else {
        value.style.color = "hsl(209, 61%, 16%)";
    }
}
