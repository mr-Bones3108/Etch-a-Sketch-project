const mainContainer = document.querySelector('div')

function createGrid(rows,cols){
    for(let i=0; i<rows;i++){
        for(let j=0; j<cols;j++){
            //create a square element
            const square = document.createElement('div')
            square.classList.add('square')
            //we can add a button to change color
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = randomColor(); // Change the color to black on hover
            });
            mainContainer.appendChild(square);
        }
    }
}

function randomColor(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`;
}
console.log(randomColor())

createGrid(16,16)


