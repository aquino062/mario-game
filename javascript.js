const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    console.log('loop')
    const tuboposition = tubo.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioposition)

    if (tuboposition <= 120 && tuboposition > 0 && marioposition < 80) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboposition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = "img/mariogameover.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '45px'

        clearInterval(loop)

    }

}, 10)


document.addEventListener('keydown', jump);





