// grab container div
const container = document.querySelector('.container');

let grid = 16;

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