const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
const limit = 100;

textArea.addEventListener("keydown", (e) => {
    if (textArea.value.length >= limit && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
    }
});

textArea.addEventListener("input", () => {
    const remaining = limit - textArea.value.length;
    counter.textContent = `${remaining} characters remaining`;

    if (remaining <= 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "yellow";
    } else {
        counter.style.color = "black";
    }
});

resetBtn.addEventListener("click", () => {
    textArea.value = "";
    counter.textContent = `${limit} characters remaining`;
    counter.style.color = "black";
});