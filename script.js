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