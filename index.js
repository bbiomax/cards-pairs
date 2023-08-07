import { renderLevel } from './gameLevel.js';

let gameLevel;

const renderChooseLevel = () => {
    const gameEl = document.getElementById('container');

    const gameHtml = `<div class="level-choose-box">
    <h2 class="level-choose-text">Выбери сложность</h2>
    <div class="levels">

        <div class="form_radio_btn">
            <input class="radio-button" id="radio-1" type="radio" name="radio" value="Первый уровень" checked>
            <label for="radio-1">1</label>
        </div>
         
        <div class="form_radio_btn">
            <input class="radio-button" id="radio-2" type="radio" name="radio" value="Второй уровень">
            <label for="radio-2">2</label>
        </div>
         
        <div class="form_radio_btn">
            <input class="radio-button" id="radio-3" type="radio" name="radio" value="Третий уровень">
            <label for="radio-3">3</label>
        </div>
    </div>
    <button class="start-button">Старт</button>
    </div>`;

    gameEl.innerHTML = gameHtml;

    const startButton = document.querySelector('.start-button');
    let radios = document.querySelectorAll('.radio-button');

    startButton.addEventListener('click', () => {
        for (let index = 0; index < radios.length; index++) {
            if (radios[index].checked) {
                gameLevel = radios[index].value;
                break;
            }
        }

        console.log(gameLevel);

        if (gameLevel === 'Первый уровень') {
            renderLevel({
                gameEl,
            });
        } else if (gameLevel === 'Второй уровень') {
            renderLevel({
                gameEl,
            });
        } else if (gameLevel === 'Третий уровень') {
            renderLevel({
                gameEl,
            });
        }
    });
};

renderChooseLevel();
