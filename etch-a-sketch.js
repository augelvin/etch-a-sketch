// grab container div
const container = document.querySelector('.container');

// grab slider
const slider = document.getElementById('slider');

// grab grid size button
const gridSize = document.getElementById('gridSize');

// initiate grid variable
let grid = slider.value

printGridSize(grid);

makeGrid(grid);

// change grid size based on input
slider.oninput = function () {
    printGridSize(this.value);

    // remove the grid
    removeAllChildNodes(container);

    // make new grid
    makeGrid(this.value);
}

const clear = document.getElementById('clear');

// clear grid
clear.onclick = function () {
    // remove the grid
    removeAllChildNodes(container);
    // make new grid
    makeGrid(slider.value);
}

// prompt input for grid size for the grid size button
gridSize.onclick = function () {
    
    let promptInput = 16;
    let valid = false;
    
    // prompt input
    while (valid == false) {
        promptInput = prompt('Enter desired grid size', '16');
        if (promptInput < 16 || promptInput > 100) {
            alert('Please enter a number between 16 and 100')
        } else {
            valid = true;
        }
    }
    
    printGridSize(promptInput);

    // remove the grid
    removeAllChildNodes(container);

    // make new grid
    makeGrid(promptInput);

    // change slider value to match
    slider.value = promptInput;
}

// make a function to make the grid size text
function printGridSize(grid) {
    gridSize.innerHTML = 'Grid size = ' + grid + 'x' + grid;
}

function makeGrid(grid) {
    // make rows according to grid size
    for (i = 0; i < grid; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('class', 'rows')
    }

    const rows = document.querySelectorAll('.rows');

    // make cells according to grid size on each row
    rows.forEach((row) => {
        for (j = 0; j < grid; j++) {
            const cell = document.createElement('div');
            row.appendChild(cell);
            cell.setAttribute('class', 'cells')
        }
    });

    const cells = document.querySelectorAll('.cells');

        // iterate through each cell to add an event listener
        cells.forEach((cell) => {

        // mouseover listener to add class 'black'
        cell.addEventListener('mouseover', () => {
            cell.classList.add('black');
        });
    });
}

// function to remove all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

