
let content = document.getElementById('content')

for (let i=0; i<16; i++) {
    let newDiv = document.createElement('div');
    console.log(newDiv)
    newDiv.id = `div ${i}` 
    content.appendChild(newDiv);
    newDiv.textContent = `div ${i}`
    if (i<4) {
        newDiv.classList.add('row1');   
    } else if (i<8) {
        newDiv.classList.add('row2');
    } else if (i<12) {
        newDiv.classList.add('row3');
    } else {
        newDiv.classList.add('row4');
    }
    
}



