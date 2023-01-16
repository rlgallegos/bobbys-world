const h3 = document.createElement('h3');
h3.textContent = 'This content added by JavaScript';
document.querySelector('body').appendChild(h3);

const skyBlue = document.createElement('#sky-blue');

skyBlue.addEventListener('click', function() {
    const body = document.createElement('body');
    body.style.backgroundColor = '#87ceeb';
});