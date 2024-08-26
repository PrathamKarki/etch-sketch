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
        container.appendChild(squareDivs);
    }
}
generateGridCells(16);