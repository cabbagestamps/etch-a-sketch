
let content = document.getElementById('content')

for (let i=0; i<100; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = `div${i}`; 
    newDiv.classList.add('cell');
    content.appendChild(newDiv);
   // newDiv.textContent = `div ${i}`
    newDiv.addEventListener('mousedown', () => {
        newDiv.classList.add('active')   
    }) 
}


let cellCount;

let root = document.querySelector(':root');

let rootStyles;

let rowCount;
let columnCount;

function getStyles() {
    rootStyles = getComputedStyle(root);
    rowCount = rootStyles.getPropertyValue('--user-rows-input') 
    columnCount = rootStyles.getPropertyValue('--user-columns-input')
    cellCount = rowCount * columnCount;
}



let body = document.body

let promptButton = document.createElement('button');
promptButton.textContent = 'Input columns and rows';
body.insertBefore(promptButton, content);

promptButton.addEventListener('click', promptFunction)



function promptFunction() {
    root.style.setProperty('--user-rows-input', prompt('Input rows', '10')) ;
    root.style.setProperty('--user-columns-input', prompt('Input columns', '10'))
    
}




/* Add a button to the top of the screen which will 
clear the current grid and send the user a popup asking
 for the number of squares per side for the new grid.
  Once entered, the new grid should be generated in the same total
   space as before (e.g. 960px wide) so that you’ve got 
   a new sketch pad.
*/


