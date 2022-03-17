
let content = document.getElementById('content')

for (let i=0; i<500; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = `div${i}`; 
    newDiv.classList.add('cell');
    content.appendChild(newDiv);
   // newDiv.textContent = `div ${i}`
    newDiv.addEventListener('mousedown', () => {
        newDiv.classList.add('active')   
    }) 
}





/* Add a button to the top of the screen which will 
clear the current grid and send the user a popup asking
 for the number of squares per side for the new grid.
  Once entered, the new grid should be generated in the same total
   space as before (e.g. 960px wide) so that you’ve got 
   a new sketch pad.
*/


