let count = 0;
let currentValueColor = "#222";

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        }
        updateTextColorIfNecessary(count);
        value.textContent = count;
    });
});

function updateTextColorIfNecessary(n) {
    let newColor;
    if (n > 0) {
        newColor = "green";
    } else if (n < 0) {
        newColor = "red";
    } else {
        newColor = "#222";
    }

    if (newColor !== currentValueColor) {
        value.style.color = newColor;
        currentValueColor = newColor;
    }
}
