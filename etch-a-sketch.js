// grab container div
const container = document.querySelector('.container');

// grab slider
const slider = document.getElementById('slider');

// update grid size text
const gridSize = document.getElementById('gridSize');

// initiate grid variable
let grid = slider.value;

printGridSize(grid);

// change grid size text based on input
slider.oninput = function () {
    printGridSize(this.value);
}

makeGrid();

// update grid size according to input
slider.addEventListener('input', () => {
    
    // remove the grid
    removeAllChildNodes(container);

    // make new grid
    makeGrid();
});



// make a function to make the grid size text
function printGridSize(grid) {
    gridSize.innerHTML = 'Grid size = ' + grid + 'x' + grid;
}

function makeGrid() {
    // make rows according to grid size
    for (i = 0; i < grid; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('class', 'rows')
        row.setAttribute('id', `${i+1}`);
    }

    const rows = document.querySelectorAll('.rows');

    // make cells according to grid size on each row
    rows.forEach((row) => {
        for (j = 0; j < grid; j++) {
            const cell = document.createElement('div');
            row.appendChild(cell);
            cell.setAttribute('class', 'cells')
            cell.setAttribute('id', `${j+1}`);
        }
    });
}

const cells = document.querySelectorAll('.cells');

// iterate through each cell to add an event listener
cells.forEach((cell) => {

    // mouseover listener to add class 'black'
    cell.addEventListener('mouseover', () => {
        cell.classList.add('black');
    });
});

// function to remove all children nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}