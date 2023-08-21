const gridContainer = document.getElementById("grid-container");

function createGrid(finalNumber) {
  // Specify number of squares in both sides 
  let divNumber = finalNumber * finalNumber;

  // Add the squares to display
  let htmlToAdd = "";

  for (let i = 1; i <= divNumber; i++) {
    htmlToAdd += `<div id="grid-cell"></div>`;
  };
  gridContainer.innerHTML = htmlToAdd;
  var styles = {
    "grid-template-columns": `repeat(${finalNumber}, 1fr)`,
    "grid-template-rows": `repeat(${finalNumber}, 1fr)`,
    "border": "1px solid black"
  }
  Object.assign(gridContainer.style, styles);


  // Apply the hover effect
  // Black
  const blackBtn = document.getElementById('black');
  var blackStyles = {
    "color": "white",
    "background-color": "black"
  };

  blackBtn.addEventListener('click', () => {
    Object.assign(blackBtn.style, blackStyles);
    const gridCells = document.querySelectorAll('#grid-cell');
    gridCells.forEach((cell) => {
      cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = "black";
      });
    });
  })
}

// Create a button functionality to manipulate squares values in both sides
const button = document.getElementById('prompt');
button.addEventListener('click', () => {
  decideNumber();
  function decideNumber() {
    const promptAnswer = prompt("Enter squares numbers per side:", 16);
    let finalNumber = Number(promptAnswer);
    console.log(typeof(finalNumber));
    if (Number.isInteger(finalNumber)) {
      if (finalNumber <= 100) {
        createGrid(finalNumber);
      } else {
        alert("Maximum number is 100!")
        decideNumber()
      }
    } else {
      alert("Please enter a number!")
      decideNumber();
    }
  }
});

createGrid(16);
alert("Pick a color!");