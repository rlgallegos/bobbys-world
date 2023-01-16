
//get variables for elements
const skyBlue = document.getElementById('sky-blue');
const forestGreen = document.getElementById('forest-green');
const crimsonRed = document.getElementById('crimson-red');
const white = document.getElementById('white');

//set function to change pointer

function makePointer() {
    document.body.style.cursor = 'pointer'
}

//Sky Blue event liseteners
skyBlue.addEventListener("click", function() {
    document.body.style.backgroundColor = '#87ceeb';
});
skyBlue.addEventListener('mouseover', makePointer);



forestGreen.addEventListener("click", function() {
    document.body.style.backgroundColor = '#228B22';
});

crimsonRed.addEventListener("click", function() {
    document.body.style.backgroundColor = '#900';
});

white.addEventListener("click", function() {
    document.body.style.backgroundColor = '#fff';
});