window.onload = function() {

let starterDiv = document.getElementById ('starter-div');
let firstHeading = document.createElement('h2');

firstHeading.innerText = 'This is a H2 created';
firstHeading.classList.add('js-header');

starterDiv.appendChild(firstHeading);
let secondHeading = document.createElement('h2');

secondHeading.innerText = 'this is h2 with js';
secondHeading.classList.add('js-header');

secondHeading.id = 'second-h2';

starterDiv.appendChild(secondHeading);
}


function showName(){
    console.log('showName');
    // start
let name= document.getElementById('name').value;
document.getElementById('greeting-text').innerText =' HI' + name;
    // end
}

function changeColour(colour) {
    // start
document.body.style.backgroundColor = colour;
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
let lightbulb = document.getElementById('light');
lightbulb.classList.toggle('on');
    // end
}
