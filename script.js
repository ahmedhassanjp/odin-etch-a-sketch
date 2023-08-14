let divNumber = 256;

const gridContainer = document.getElementById("grid-container");
let HtmlToAdd = "";

for (let i = 1; i <= divNumber; i++) {
  HtmlToAdd += `<div id="grid-div"></div>`;
};
gridContainer.innerHTML = HtmlToAdd;