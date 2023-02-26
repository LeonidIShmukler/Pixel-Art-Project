const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
let selectedColor = colorPicker.value;


colorPicker.addEventListener('input', () => {
  selectedColor = colorPicker.value;
});

sizePicker.addEventListener('submit', (event) => {
  event.preventDefault();
  resetGrid();
  makeGrid();  
});


function makeGrid() {
  const rows = inputHeight.value;
  const columns = inputWidth.value;

  for (let r = 0; r < rows; r++) {
    const row = pixelCanvas.insertRow(r);
    for (let c = 0; c < columns; c++) {
      const cell = row.insertCell(c);
      cell.addEventListener('click', () => {
        cell.style.backgroundColor = selectedColor;
      })
    }
  }
}

function resetGrid() {
while (pixelCanvas.firstChild) {
  pixelCanvas.removeChild(pixelCanvas.firstChild);
}}
