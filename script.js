const container = document.querySelector(".container");
const generateButton = document.querySelector("#btn");

function generateGrid(gridDimension = 16) {
  container.innerHTML = "";
  const containerWidth = container.clientWidth;
  const boxSize = Math.min(20, containerWidth / gridDimension);

  for (let i = 0; i < gridDimension; i++) {
    for (let j = 0; j < gridDimension; j++) {
      const div = document.createElement("div");
      div.classList.add("box");

      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;

      let opacity = 0.1;
      div.addEventListener("mouseenter", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r},${g},${b},${opacity})`;

        opacity = Math.min(1, opacity + 0.1);
      });

      container.appendChild(div);
    }

    const nextLineDiv = document.createElement("div");
    nextLineDiv.setAttribute("style", "flex-basis:100%; height:0;");
    container.appendChild(nextLineDiv);
  }
}

generateButton.addEventListener("click", () => {
  const userInput = prompt("Enter the number of squares per side(1-100):");

  if (userInput === null) {
    return;
  }
  const gridDimension = Number(userInput);

  if (
    !Number.isInteger(gridDimension) ||
    gridDimension < 1 ||
    gridDimension > 100
  ) {
    alert("Please enter a whole numnber between 1 and 100");
    return;
  }

  generateGrid(gridDimension);
});

generateGrid();

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
