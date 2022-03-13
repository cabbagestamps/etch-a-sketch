
let content = document.getElementById('content')

for (let i=0; i<900; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = `div${i}` 
    content.appendChild(newDiv);
    newDiv.textContent = `div ${i}`
    newDiv.addEventListener('mouseenter', () => {
        newDiv.classList.add('active')
    })
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





