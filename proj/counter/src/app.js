let count = 0;

function decrease() {
    count--;
    document.getElementById("value").textContent = count;
    updateFontColor();
}

function reset() {
    count = 0;
    document.getElementById("value").textContent = count;
    updateFontColor();
}

function increase() {
    count++;
    document.getElementById("value").textContent = count;
    updateFontColor();
}

function updateFontColor() {
    if (count < 0) {
        document.getElementById("value").style.color = "red";
    } else if (0 < count) {
        document.getElementById("value").style.color = "green";
    } else {
        document.getElementById("value").style.color = "hsl(209, 61%, 16%)";
    }
}
