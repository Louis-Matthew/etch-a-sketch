const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute(
      "style",
      "background-color: lightgrey; min-width: 20px; min-height: 20px; border: 2px solid white",
    );
    container.appendChild(div);
  }

  const nextLineDiv = document.createElement("div");
  nextLineDiv.setAttribute("style", "flex-basis:100%; height:0;");
  container.appendChild(nextLineDiv);
}

const divs = document.querySelectorAll(".box");
divs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "black";
  });
});
