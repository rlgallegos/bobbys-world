const skyBlue = document.getElementById('sky-blue');
const forestGreen = document.getElementById('forest-green');
const crimsonRed = document.getElementById('crimson-red');
const white = document.getElementById('white');
const text = document.getElementsByTagName('*');


skyBlue.addEventListener("click", function() {
    document.body.style.backgroundColor = '#87ceeb';
});

forestGreen.addEventListener("click", function() {
    document.body.style.backgroundColor = '#228B22';
});

crimsonRed.addEventListener("click", function() {
    document.body.style.backgroundColor = '#900';
    for (let i = 0; i < all.length; i++) {
        all[i].color = 'white'
    };
});

white.addEventListener("click", function() {
    document.body.style.backgroundColor = '#fff';
});