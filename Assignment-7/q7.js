const box = document.getElementById("coordBox");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    coords.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

box.addEventListener("dblclick", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.background = "red";
    dot.style.borderRadius = "50%";
    dot.style.transform = "translate(-50%, -50%)";
    box.appendChild(dot);
});