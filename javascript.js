const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const scoreElement = document.querySelector('.score');
let score = 0;

const jumpSound = new Audio('sons/mario_pulando.mp3');
jumpSound.volume = 0.1;
const jumpSounder = new Audio('sons/gameover.mp3');
jumpSounder.volume = 0.1;
const jump = () => {
    jumpSound.play();
    mario.classList.add('jump');

    score++;
    scoreElement.textContent = score;
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
    const tuboposition = tubo.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (tuboposition <= 120 && tuboposition > 0 && marioposition < 80) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboposition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = "img/mariogameover.png"
        jumpSounder.play();

        const gameOver = document.querySelector('.gameover');
       gameOver.style.display = 'block';
       
       const restartbutton = document.querySelector('#restartbutton');
       restartbutton.style.display = 'block';
        
        mario.style.width = '75px'
        mario.style.marginLeft = '45px'


        clearInterval(loop)
    }
    
}, 10)

const reload = document.querySelector('#restartbutton');

reload.addEventListener('click', () => {
  location.reload();
});

document.addEventListener('keydown', jump);
