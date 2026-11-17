const dropBtn = document.getElementById("dropBtn");
const dropContent = document.getElementById("dropContent");

dropBtn.addEventListener("click", (e) => {
    dropContent.style.display = dropContent.style.display === "block" ? "none" : "block";
    e.stopPropagation();
});

dropContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")) {
        dropBtn.textContent = e.target.textContent;
        dropContent.style.display = "none";
    }
});

document.addEventListener("click", () => {
    dropContent.style.display = "none";
}, true);