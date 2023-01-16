const skyBlue = document.getElementById('sky-blue');

skyBlue.addEventListener('click', function(e) {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'blue';
    console.log(e);
});