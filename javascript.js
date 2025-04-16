let container = document.querySelector('.container');

function createGrid(numSquares) {
    squareSideLength = parseInt(getComputedStyle(container).width) / numSquares;
    squareSideLength = `${squareSideLength}px`;

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

function getRandomRGB() {
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

container.addEventListener('mouseover', e => {
    target = e.target;
    if (target.className != 'container') {
        color = getRandomRGB();
        target.style.backgroundColor = color;
        if (target.style.opacity < 1) {
            target.style.opacity = Number(target.style.opacity) + .1;
        }
        
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
        'Enter the dimensions. (The resulting grid will be inputxinput)\n(Input must be 100 or less)'
    );
    createGrid(numSquares);
});

createGrid(10);