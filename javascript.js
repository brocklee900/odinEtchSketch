let container = document.querySelector(".container");
for (i = 0; i< 16; i++) {
    div = document.createElement("div");
    div.classList.add("gridDiv");
    div.textContent = "woah";
    container.appendChild(div);
}