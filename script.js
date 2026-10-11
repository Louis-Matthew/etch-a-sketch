const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute(
      "style",
      "background-color: lightgrey; min-width:15px; min-height:15px;",
    );
    container.appendChild(div);

}
