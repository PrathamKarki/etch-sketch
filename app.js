const container =  document.getElementById("container");
const intialGridSize = 960;
let gridCellsCount;
let intialColor = 'black';

const generateGridCells =(gridCellsCount) =>{
    
    for(let i=0; i < gridCellsCount * gridCellsCount; i++)
    {
        const squareDivs = document.createElement('div');
        squareDivs.style.width = `${intialGridSize/gridCellsCount}px`;
        squareDivs.style.height = `${intialGridSize/gridCellsCount}px`;
        squareDivs.style.border = "1px solid rgb(169, 169, 169)";
        squareDivs.style.boxSizing ="border-box";
        squareDivs.style.flexShrink = '0';
        squareDivs.style.flexBasis = `${intialGridSize/gridCellsCount}px`;
        squareDivs.setAttribute('class','small-squares');
        container.appendChild(squareDivs);
        
    }
    toogleHovering();
}
generateGridCells(16);

/* button to change grid sizes inside container */
const gridButton = document.querySelector('#btn-grid');

gridButton.addEventListener('click',()=>{

    let popUp = prompt("Enter the number of squares per side for grid (maximum upto 100)");

    if(isNaN(popUp)|| popUp < 1 || popUp > 100 )
    {
    alert("Invalid  choice ! choose choose between 2 - 100");
    }

    else {
     container.innerHTML = '';
    generateGridCells(popUp);
    }
})

/* hovering effect for the grid boxes */
const red = document.querySelector("#Red");
const blue = document.querySelector("#Blue");
const green = document.querySelector("#Green");
const yellow = document.querySelector("#Yellow");
const reset = document.querySelector("#Reset");


function toogleHovering  () {
    const smallSquare = document.querySelectorAll('.small-squares')
    smallSquare.forEach(squares => {
        squares.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor = `${intialColor}`;
        });
        
    });
}
toogleHovering();

red.addEventListener("click",(e)=>{
    intialColor = 'red';
    
})

blue.addEventListener("click",(e)=>{
    intialColor = 'blue';
    
})


green.addEventListener("click",(e)=>{
    intialColor = 'green';
    
})

yellow.addEventListener("click",(e)=>{
    intialColor = 'yellow';
    
})

/* resetting the grid */

reset.addEventListener('click',()=>{
    container.innerHTML = '';
    generateGridCells(16);
})