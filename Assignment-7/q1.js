const input = document.getElementById("productInput");
const addBtn = document.getElementById("addProduct");
const list = document.getElementById("productList");

addBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;
    const li = document.createElement("li");
    li.innerHTML = `<span>${input.value}</span> <button class="edit">Edit</button> <button class="delete">Delete</button>`;
    list.appendChild(li);
    input.value = "";
});

list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const span = li.querySelector("span");

    if (e.target.classList.contains("delete")) {
        li.remove();
    } else if (e.target.classList.contains("edit")) {
        span.contentEditable = true;
        span.focus();
        e.target.textContent = "Save";
        e.target.className = "save";
    } else if (e.target.classList.contains("save")) {
        span.contentEditable = false;
        e.target.textContent = "Edit";
        e.target.className = "edit";
    }
});

document.addEventListener("click", (e) => {
    const editingSpan = list.querySelector("span[contenteditable='true']");
    if (editingSpan && !editingSpan.contains(e.target) && !e.target.classList.contains("save")) {
        editingSpan.contentEditable = false;
        const btn = editingSpan.parentElement.querySelector(".save");
        if (btn) {
            btn.textContent = "Edit";
            btn.className = "edit";
        }
    }
});