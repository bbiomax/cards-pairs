let radios = document.querySelectorAll('.radio-button');
let gameLevel;

const levelNumberOne = document.querySelector('.levels_number_one');
const levelNumberTwo = document.querySelector('.levels_number_two');
const levelNumberThree = document.querySelector('.levels_number_three');

function chooseGameLevel() {

    // захардкодил, потому что через "checked" радиокнопок не получается
    levelNumberOne.addEventListener('click', () => {
        levelNumberOne.classList.add('level_choosed');
        levelNumberTwo.classList.remove('level_choosed');
        levelNumberThree.classList.remove('level_choosed');
    })
    levelNumberTwo.addEventListener('click', () => {
        levelNumberOne.classList.remove('level_choosed');
        levelNumberTwo.classList.add('level_choosed');
        levelNumberThree.classList.remove('level_choosed');
    })
    levelNumberThree.addEventListener('click', () => {
        levelNumberOne.classList.remove('level_choosed');
        levelNumberTwo.classList.remove('level_choosed');
        levelNumberThree.classList.add('level_choosed');
    })
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

    if (gameLevel === 'Первый уровень') {
        window.location = './level.html';
    } else if (gameLevel === 'Второй уровень') {
        window.location = './level.html';
    } else if (gameLevel === 'Третий уровень') {
        window.location = './level.html';
    }
})

console.log(gameLevel);