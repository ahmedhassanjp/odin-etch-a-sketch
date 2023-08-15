function drawSquares (finalNumber) {
  // Specify number of squares in both sides 
let divNumber = finalNumber * finalNumber;

// Add the squares to display
const gridContainer = document.getElementById("grid-container");
let HtmlToAdd = "";
for (let i = 1; i <= divNumber; i++) {
  HtmlToAdd += `<div id="grid-div"></div>`;
};
gridContainer.innerHTML = HtmlToAdd;

// Apply the hover effect
const gridDiv = document.querySelectorAll('#grid-div');
gridDiv.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = "white";
  });
  div.addEventListener('mouseleave', () => {
    div.style.backgroundColor = "black";
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
      drawSquares(finalNumber);
    } else {
      alert("Please enter a number!")
      decideNumber();
    }
  }
});



// AN IDEA FOR CREATING A ROW AND A COLUMN WITH THE SAME NUMBER
// - We pass a number (lets say four)
// - JS takes this number and created some div elements in that number (now we have four divs)
// - We style those divs with flexbox to be next each other (for ex: ---- as four divs)
// - We repeat that process the exact same number of times (for ex: we repeat it four times)
// - Now we have 2 flexboxes: 
//    First one for the first row (container) and the divs inside it (flex items)
//    Second one for the whole rows that we repeated (list items now become the horizontal containers from above ----)