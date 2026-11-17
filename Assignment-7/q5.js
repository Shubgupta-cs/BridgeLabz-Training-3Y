const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

gallery.addEventListener("click", (e) => {
    if (e.target.classList.contains("thumb")) {
        modalImg.src = e.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    } else {
        e.stopPropagation();
    }
});