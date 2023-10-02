// const mainContainer = document.querySelector('div')
// const gridSize = document.querySelector('button')

// function createGrid(rows,cols){
//     for(let i=0; i<rows;i++){
//         for(let j=0; j<cols;j++){
//             //create a square element
//             const square = document.createElement('div')
//             square.classList.add('square')
//             //we can add a button to change color
//             square.addEventListener("mouseover", () => {
//                 square.style.backgroundColor = randomColor(); // Change the color to black on hover
//             });
//             mainContainer.appendChild(square);
//         }
//         // mainContainer.appendChild(document.createElement('br'));
//     }
//     const maxWidth = cols * 30 + 'px' ;
//     document.documentElement.style.setProperty('--max-grid-width', maxWidth);
// }

// function randomColor(){
//     const r = Math.floor(Math.random()*256)
//     const g = Math.floor(Math.random()*256)
//     const b = Math.floor(Math.random()*256)
//     return `rgb(${r},${g},${b})`;
//     // return `rgb(${0},${0},${0})`;
// }
// console.log(randomColor())


// gridSize.addEventListener('click',function(){
//     const size = prompt("Enter the size of grid: ")
//     createGrid(size,size)
    
// })

function makeGrid(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        square.addEventListener('mouseover', () => {
            // Your event handling code here
            square.style.background = "black"
        });
        board.appendChild(square); // Use appendChild to add the square
    }
}

makeGrid(16);

function changeSize(newSize) {
    if (newSize >= 2 && newSize <= 64) {
        makeGrid(newSize);
    } else {
        console.log("Size is not within the valid range (2-64)!!");
    }
}









