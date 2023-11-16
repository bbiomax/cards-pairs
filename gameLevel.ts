import { gameEl } from './index';
import { getRandomCardsArray } from './cards';
import { first } from 'lodash';

export const renderLevel = (level: number) => {
    const gameHtml = `<div class="container-level">
    <div class="header">
        <div class="stopwatch">
            <div class="stopwatch-minsek">
                <span style="font-family: stratosskyeng;">min</span>
                <span style="font-family: stratosskyeng;">sek</span>
            </div>
            <div class="stopwatch-time" style="font-family: stratosskyeng;">00.00</div>
        </div>
        <button class="restart-button" style="font-family: stratosskyeng;">Начать заново</button>
    </div>
    <div class="cards-box">
    <div class="memory-card">
        <img src="./static/img/frontSide/club/ace.png" alt="" class="front-face">
        <img src="./static/img/backSide/backSide.png" alt="" class="back-face">
    </div>`;

    if (gameEl) {
        gameEl.innerHTML = gameHtml;
    }

    const gameContainer = document.querySelector('.cards-box');

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
            alert('Вы выиграли!');
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

    cards.forEach((card) => card.addEventListener('click', flipCard));
};