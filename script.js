const skyBlue = document.getElementById('sky-blue');
const body = document.querySelector('body');

skyBlue.addEventListener("click", function() {
    document.body.style.backgroundColor = 'white';
    console.log("button clicked");
});