
let content = document.getElementById('content')
let div1 = document.createElement('div');
content.appendChild(div1);


function numberGen() {
    for (let a=0; a<16; a++) {
    return a
    }
}
let a;

for (let i=0; i<16; i++) {
    let i = document.createElement('div');
    
    i.setAttribute('id', 'div + i');  
    content.appendChild(i);
}