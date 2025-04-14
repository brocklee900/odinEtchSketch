let container = document.querySelector(".container");
for (i = 0; i< 16; i++) {
    div = document.createElement("div");
    div.classList.add("gridDiv");
    div.textContent = "woah";
    container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
    target = e.target;
    if (target.className != "container") {
        target.classList.toggle("hover");
    }
})

container.addEventListener("mouseout", (e) => {
    target = e.target;
    if (target.className != "container") {
        target.classList.toggle("hover");
    }
})