import "./static/style.css";
import { renderLevel } from './gameLevel';

let gameLevel: string;
export const gameEl = document.getElementById('container');

export const renderChooseLevel = () => {
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

    if (gameEl) {
        gameEl.innerHTML = gameHtml;
    }

    const startButton = document.querySelector('.start-button');
    let radios = document.querySelectorAll('.radio-button');

    if (startButton) {
        startButton.addEventListener('click', () => {
            for (let index = 0; index < radios.length; index++) {
                if ((radios[index] as HTMLInputElement).checked) {
                    gameLevel = (radios[index] as HTMLInputElement).value;
                    break;
                }
            }
    
            console.log(gameLevel);
    
            if (gameLevel === 'Первый уровень') {
                renderLevel(3);
            } else if (gameLevel === 'Второй уровень') {
                renderLevel(6);
            } else if (gameLevel === 'Третий уровень') {
                renderLevel(9);
            }
        });
    } 
};

renderChooseLevel();
