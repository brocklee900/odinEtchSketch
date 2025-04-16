let container = document.querySelector('.container');

function createGrid(numSquares) {
    squareSideLength = parseInt(getComputedStyle(container).width) / numSquares;
    squareSideLength = `${squareSideLength}px`;
    console.log(squareSideLength);

    for (i = 0; i < numSquares; i++) {
        for (j = 0; j < numSquares; j++) {
            div = document.createElement('div');
            div.classList.add('gridDiv');
            div.style.width = squareSideLength;
            div.style.height = squareSideLength;
            container.appendChild(div);
        }
    }
}

container.addEventListener('mouseover', e => {
    target = e.target;
    if (target.className != 'container') {
        target.classList.toggle('hover');
    }
});

container.addEventListener('mouseout', e => {
    target = e.target;
    if (target.className != 'container') {
        target.classList.toggle('hover');
    }
});

const resize = document.querySelector('#resize');
resize.addEventListener('click', () => {

    while (container.lastElementChild) {
        count = 0;
        while (container.lastElementChild) {
            count += 1;
            container.removeChild(container.lastElementChild);
            if (count > 1000) {
                break;
            }
        }
    }

    numSquares = +prompt(
        'Enter the dimensions. (The resulting grid will be inputxinput)'
    );
    createGrid(numSquares);
});

createGrid(10);