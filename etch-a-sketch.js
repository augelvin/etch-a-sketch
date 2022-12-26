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

