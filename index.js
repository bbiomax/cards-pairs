let radios = document.querySelectorAll('.radio-button');
let gameLevel;

function chooseGameLevel() {
    const levels = document.querySelectorAll('.levels_number');
    for (const level of levels) {
        level.addEventListener('click', () => {
            level.classList.add('level_choosed');
        })
    }
}

chooseGameLevel();

const startButton = document.querySelector('.start-button').addEventListener('click', () => {

    for (let index = 0; index < radios.length; index++) {
        if (radios[index].checked) {
            gameLevel = radios[index].value;
            break;
        }
    }

    console.log(gameLevel);

    if(gameLevel === 'Первый уровень') {
        window.location = './level.html';
    } else if (gameLevel === 'Второй уровень') {
        window.location = './level.html';
    } else if (gameLevel === 'Третий уровень') {
        window.location = './level.html';
    }
})