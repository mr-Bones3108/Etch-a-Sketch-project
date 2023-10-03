
function makeGrid(size,color) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "lightgrey";
        square.addEventListener('mouseover', () => {
            // Your event handling code here
            square.style.background = selectColor(color);
        });
        board.appendChild(square); // Use appendChild to add the square
    }
}

function selectColor(){
    if (color ==="black"){
        return `rgba(0, 0, 0, 1)`;
    }
    else if (color ==="white"){
        return `rgba(255, 255, 255, 1)`;
    }
    else{
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        return rgbColor;
    }  
}

makeGrid(16);
let = color="black"
function changeColor(newColor) {
    color = newColor
}

function resetColor(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');

    squares.forEach((square) => {
        square.style.backgroundColor = "lightgrey";
    });
}

function changeSize(newSize) {
    if (newSize >= 2 && newSize <= 64) {
        makeGrid(newSize,color);
    } else {
        console.log("Size is not within the valid range (2-64)!!");
    }
}









