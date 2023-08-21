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
const gridCells = document.querySelectorAll('#grid-cell');
gridCells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor = "white";
    });
    cell.addEventListener('mouseleave', () => {
      cell.style.backgroundColor = "black";
    });
});
}

// Create a button functionality to manipulate squares values in both sides
const button = document.getElementById('prompt');
button.addEventListener('click', () => {
  decideNumber();
  function decideNumber() {
    const promptAnswer = prompt("Enter squares numbers per side:");
    let finalNumber = Number(promptAnswer);
    console.log(typeof(finalNumber));
    if (Number.isInteger(finalNumber)) {
      createGrid(finalNumber);
    } else {
      alert("Please enter a number!")
      decideNumber();
    }
  }
});



// AN IDEA FOR CREATING A ROW AND A COLUMN WITH THE SAME NUMBER
// - We pass a number (lets say four)
// - JS takes this number and creates some div elements in that number (now we have four divs)
// - We style those divs with flexbox to be next each other (for ex: ---- as four divs)
// - We repeat that process the exact same number of times (for ex: we repeat it four times)
// - Now we have 2 flexboxes: 
//    First one for the first row (container) and the divs inside it (flex items)
//    Second one for the whole rows that we repeated (list items now become the horizontal containers from above ----)