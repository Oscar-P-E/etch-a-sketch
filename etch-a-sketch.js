const container = document.querySelector(".container");
const upperContainer = document.querySelector(".upper-container");

const nSquaresBtn = document.createElement("button");
nSquaresBtn.classList.add("n-squares-btn");
nSquaresBtn.textContent = "Create custom canvas";

upperContainer.appendChild(nSquaresBtn);

nSquaresBtn.addEventListener("click", promptSize);

let n = 16;
drawCanvas(n);

// function clearCanvas() {
// document.querySelectorAll(.square)
// }

function promptSize(n) {
  userInput = prompt("Enter custom grid width (max 100):");

  if (n < 1 || n > 100 || n === NaN) {
    return window.alert(
      "Invalid size. You must enter a number between 1 and 100."
    );
  }

  n = userInput ** 2;

  container.replaceChildren();
  drawCanvas(n);
}

function drawCanvas(n) {
  // So that we only write to the DOM and redraw once
  let fragment = document.createDocumentFragment();

  for (i = 0; i < n; ++i) {
    let square = document.createElement("div");
    square.classList.add("square");
    fragment.appendChild(square);
  }

  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${Math.sqrt(n)}, 1fr)`
  );

  container.appendChild(fragment);

  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    // square.addEventListener("mouseover", makeBlack);
    square.addEventListener("mouseover", makeRandColor);
    // square.addEventListener("mouseover", progressiveBlack);
  });
}

function makeBlack(e) {
  e.target.setAttribute("style", "background: black");
}

// Extra Credit
// - Instead of just changing the color of a square from black to white
// (for example), have each pass through with the mouse change it to a
// completely random RGB value. Then try having each pass just add another
// 10% of black to it so that only after 10 passes is the square
// completely black.

function makeRandColor(e) {
  e.target.setAttribute("style", `background: ${randomRGB()}`);
}

function randomRGB() {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function progressiveBlack() {}
