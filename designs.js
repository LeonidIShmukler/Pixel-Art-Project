// Set Variables for HTML elements
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
let selectedColor = colorPicker.value;

// listen for color picker changes
colorPicker.addEventListener('input', () => {
	selectedColor = colorPicker.value;
});
 
// listen for form submit - prevent default for submit event - call clear grid function- call create new grid function
sizePicker.addEventListener('submit', (event) => {
	event.preventDefault();
	resetGrid();
	makeGrid();
});

// create new grid
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

// clear grid
function resetGrid() {
	while (pixelCanvas.firstChild) {
		pixelCanvas.removeChild(pixelCanvas.firstChild);
	}
}