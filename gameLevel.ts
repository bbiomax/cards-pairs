import { gameEl, renderChooseLevel } from './index';
import { getRandomCardsArray } from './cards';
import { first, forEach } from 'lodash';
// import { finalScreen } from './finalScreen';

export const renderLevel = (level: number) => {
    const gameHtml = `<div class="container-level">
    <div class="header">
        <div class="stopwatch">
            <div class="stopwatch-minsek">
                <span style="font-family: stratosskyeng;">min</span>
                <span style="font-family: stratosskyeng;">sek</span>
            </div>
            <div class="stopwatch" style="font-family: stratosskyeng;">
                <span class="stopwatch_minutes">00</span>
                <span class="stopwatch_colon">:</span>
                <span class="stopwatch_seconds">00</span>
            </div>
        </div>
        <button class="restart-button" style="font-family: stratosskyeng;">Начать заново</button>
    </div>
    <div class="cards-box">
    </div>`;

    if (gameEl) {
        gameEl.innerHTML = gameHtml;
    }

    // stopwatch
    const minutesBlock: HTMLElement | null = document.querySelector('.stopwatch_minutes');
    const secondsBlock: HTMLElement | null = document.querySelector('.stopwatch_seconds');
    let interval: NodeJS.Timeout;
    let minutes: number = 0;
    let seconds: number = 0;

    let mistakesCount: number = 0;
    let loseOrWin: string;

    const startTimer = () => {
        seconds++;
        if (secondsBlock) {
            secondsBlock.innerHTML = '0' + seconds;
        }

        if (seconds > 9) {
            if (secondsBlock) {
                secondsBlock.innerHTML = seconds.toString();
            }
        }
    
        if (seconds >= 59) {
            minutes++;
            if (minutesBlock) {
                minutesBlock.innerHTML = '0' + minutes;
            }
    
            seconds = 0;
        }
    }

    setTimeout(function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
    }, 5000);

    const restartButtons = document.querySelectorAll('.restart-button');

    restartButtons.forEach((restartButton) => {
        restartButton.addEventListener('click', () => {
            renderChooseLevel();
        })
    })

    const gameContainer = document.querySelector('.cards-box');
    const containerLevel = document.querySelector('.container-level');

    interface Card {
        name: string;
        srcFront: string;
        srcBack: string;
    }

    let randomCards = getRandomCardsArray(level);
    
    let cardsHtml = randomCards.map((card) => `
    <div class="memory-card" data-name="${card.name}">
        <img src="${card.srcFront}" alt="" class="front-face">
        <img src="${card.srcBack}" alt="" class="back-face">
    </div>`).join('');

    if (gameContainer) {
        gameContainer.innerHTML = cardsHtml;
    }

    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard: HTMLElement | null, secondCard: HTMLElement | null;

    function flipCard(this: HTMLElement) {
        if (lockBoard) return;
        if (this === firstCard) return;


        this.classList.toggle('flip');

        if (!hasFlippedCard) {
            // first click
            hasFlippedCard = true;
            firstCard = this;
        } else {
            // second click
            secondCard = this;
    
            checkForMatch();
        }

        if (Array.from(cards).every(cards => cards.className.includes('flip'))) {
            containerLevel?.classList.add('container-level-after');
            loseOrWin = 'win';
            finalScreen(loseOrWin);
        }
    }

    function checkForMatch() {
        // Короткий вариант
        // let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        // isMatch ? disabledCards() : unflipCards();
    
        if (firstCard && secondCard) {
                // do cards match?
            if (firstCard.dataset.name === secondCard.dataset.name) {
                // it's a match!
                disabledCards();
            } else {
                // not a match
                mistakesCount++;
                console.log(mistakesCount);

                if (mistakesCount === 3) {
                    containerLevel?.classList.add('container-level-after');
                    loseOrWin = 'lose';
                    finalScreen(loseOrWin);
                }
                unflipCards();
            }
        }
    }

    function disabledCards() {
        if (firstCard && secondCard) {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }
    
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
            if (firstCard && secondCard) {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }
    
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            if (card instanceof HTMLElement) {
                let randomPos = Math.floor(Math.random() * 36);
                card.style.order = randomPos.toString();
            }
        })
    })();

    cards.forEach((card) => {
        card.classList.toggle('flip');
    })

    setTimeout(function() {
        cards.forEach((card) => {
            card.classList.toggle('flip');
            card.addEventListener('click', flipCard);
        })
    }, 5000);

    const finalScreen = (loseOrWin: string) => {
        let minutesSpent = minutesBlock?.innerHTML;
        let secondsSpent = secondsBlock?.innerHTML;

        if (loseOrWin === 'win') {
            const finalGameHtml = `<div class="final-container">
                <div class="win-lose-box">
                    <div class="win-img"></div>
                    <span class="win-lose-title" style="font-family: stratosskyeng;">Вы выиграли!</span>
                    <span class="win-lose-text" style="font-family: stratosskyeng;">Затраченное время:</span>
                    <span class="win-lose-time" style="font-family: stratosskyeng;">${minutesSpent}:${secondsSpent}</span>
                    <button class="restart-button" style="font-family: stratosskyeng;">Начать заново</button>
                </div>
            </div>`;
        
            if (gameEl) {
                gameEl.innerHTML += finalGameHtml;
            }
        } else {
            const finalGameHtml = `<div class="final-container">
                <div class="win-lose-box">
                    <div class="lose-img"></div>
                    <span class="win-lose-title" style="font-family: stratosskyeng;">Вы проиграли!</span>
                    <span class="win-lose-text" style="font-family: stratosskyeng;">Затраченное время:</span>
                    <span class="win-lose-time" style="font-family: stratosskyeng;">${minutesSpent}:${secondsSpent}</span>
                    <button class="restart-button" style="font-family: stratosskyeng;">Начать заново</button>
                </div>
            </div>`;
        
            if (gameEl) {
                gameEl.innerHTML += finalGameHtml;
            }
        }

        const restartButtons = document.querySelectorAll('.restart-button');

        restartButtons.forEach((restartButton) => {
            restartButton.addEventListener('click', () => {
                renderChooseLevel();
            })
        })
    };
};
