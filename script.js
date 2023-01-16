
//get variables for elements
const skyBlue = document.getElementById('sky-blue');
const forestGreen = document.getElementById('forest-green');
const crimsonRed = document.getElementById('crimson-red');
const white = document.getElementById('white');


//Sky Blue event liseteners
skyBlue.addEventListener("click", function() {
    document.body.style.backgroundColor = '#87ceeb';
});
skyBlue.addEventListener('mouseover', function() {
    skyBlue.style.cursor = 'pointer';
});

//Forest Green event listeners

forestGreen.addEventListener("click", function() {
    document.body.style.backgroundColor = '#228B22';
});

forestGreen.addEventListener('mouseover', function() {
    forestGreen.body.style.cursor = 'pointer'
});

//Crimson Red event listeners

crimsonRed.addEventListener("click", function() {
    document.body.style.backgroundColor = '#900';
});

//White event listeners

white.addEventListener("click", function() {
    document.body.style.backgroundColor = '#fff';
});