const mainContainer = document.querySelector('div')

function createGrid(rows,cols){
    for(let i=0; i<rows;i++){
        for(let j=0; j<cols;j++){
            //create a square element
            const square = document.createElement('div')
            square.classList.add('square')
            mainContainer.appendChild(square);
        }
    }
}

createGrid(16,16)
