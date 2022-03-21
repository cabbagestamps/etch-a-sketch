
let content = document.getElementById('content')
let body = document.body;
let root = document.querySelector(':root');
let cellCount;
let rootStyles;
let rowCount;
let columnCount;


function drawCells() {
    for (let i=0; i<cellCount; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = `div${i}`; 
        newDiv.classList.add('cell');
        content.appendChild(newDiv);
        
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('active')   
        }) 
    }
}


function getStyles() {
    rootStyles = getComputedStyle(root);
    rowCount = rootStyles.getPropertyValue('--user-rows-input') 
    columnCount = rootStyles.getPropertyValue('--user-columns-input')
    cellCount = rowCount * columnCount;
}



let promptButton = document.createElement('button');
promptButton.textContent = 'Input columns and rows';
body.insertBefore(promptButton, content);
promptButton.addEventListener('click', promptFunction)

let rowPrompt;
let columnPrompt;

function promptFunction() {
    clearCells()
    rowPrompt = window.prompt('Input rows', '10')
    columnPrompt = window.prompt('Input columns', '10')
    if (rowPrompt < 0) rowPrompt = 0;
    if (rowPrompt > 80) rowPrompt = 80;
    if (columnPrompt < 0) columnPrompt = 0;
    if (columnPrompt > 80) columnPrompt = 80;
    root.style.setProperty('--user-rows-input', rowPrompt) ;
    root.style.setProperty('--user-columns-input', columnPrompt)
    getStyles()
    drawCells()
    
}

function clearCells() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    } 
}



