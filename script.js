const skyBlue = document.getElementById('sky-blue');
const forestGreen = document.getElementById('forest-green');
const crimsonRed = document.getElementById('crimson-red');
const white = document.getElementById('white');


skyBlue.addEventListener("click", function() {
    document.body.style.backgroundColor = '#87ceeb';
});

forestGreen.addEventListener("click", function() {
    document.body.style.backgroundColor = '#228B22';
});

crimsonRed.addEventListener("click", function() {
    document.body.style.backgroundColor = '#900';
});

white.addEventListener("click", function() {
    document.body.style.backgroundColor = '#fff';
});