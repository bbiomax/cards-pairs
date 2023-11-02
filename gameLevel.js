import { gameEl } from './index.js';
import { getRandomCardsArray } from './cards.js';

export const renderFirstLevel = () => {
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

    gameEl.innerHTML = gameHtml;

    const gameContainer = document.querySelector('.cards-box');
    
    let cardsHtml = getRandomCardsArray(3).map((card) => `
    <div class="memory-card" data-name="${card.name}">
        <img src="${card.scrFront}" alt="" class="front-face">
        <img src="${card.srcBack}" alt="" class="back-face">
    </div>`).join('');

    gameContainer.innerHTML = cardsHtml;

    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
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
    }

    function checkForMatch() {
        // Короткий вариант
        // let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        // isMatch ? disabledCards() : unflipCards();
    
        // do cards match?
        if (firstCard.dataset.name === secondCard.dataset.name) {
            // it's a match!
            disabledCards();
        } else {
            // not a match
            unflipCards();
        }
    }

    function disabledCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 36);
            card.style.order = randomPos;
        })
    })();

    cards.forEach((card) => card.addEventListener('click', flipCard));

    // function checkForWIn(cards) {
    //     for (let i = 0; i < cardObject.length; i++) {
    //         if (!cardObject[i].classList.contains('flip')) {
    //             return false;
    //         }
    //     }
    //     return true;
    // } 

    // if (checkAllCardsFlipped(cards)) {
    //     alert('Вы выиграли!');
    // } 

    if (Array.from(cards).every(cards => cards.className.includes('flip'))) {
        alert('Вы выиграли!');
    }
};

export const renderSecondLevel = () => {
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

    gameEl.innerHTML = gameHtml;

    const gameContainer = document.querySelector('.cards-box');
    
    let cardsHtml = getRandomCardsArray(6).map((card) => `
    <div class="memory-card" data-name="${card.name}">
        <img src="${card.scrFront}" alt="" class="front-face">
        <img src="${card.srcBack}" alt="" class="back-face">
    </div>`).join('');

    gameContainer.innerHTML = cardsHtml;

    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
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
    }

    function checkForMatch() {
        // Короткий вариант
        // let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        // isMatch ? disabledCards() : unflipCards();
    
        // do cards match?
        if (firstCard.dataset.name === secondCard.dataset.name) {
            // it's a match!
            disabledCards();
        } else {
            // not a match
            unflipCards();
        }
    }

    function disabledCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 36);
            card.style.order = randomPos;
        })
    })();

    cards.forEach((card) => card.addEventListener('click', flipCard));
};

export const renderThirdLevel = () => {
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

    gameEl.innerHTML = gameHtml;

    const gameContainer = document.querySelector('.cards-box');
    
    let cardsHtml = getRandomCardsArray(9).map((card) => `
    <div class="memory-card" data-name="${card.name}">
        <img src="${card.scrFront}" alt="" class="front-face">
        <img src="${card.srcBack}" alt="" class="back-face">
    </div>`).join('');

    gameContainer.innerHTML = cardsHtml;

    const cards = document.querySelectorAll('.memory-card');

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function flipCard() {
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
    }

    function checkForMatch() {
        // Короткий вариант
        // let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        // isMatch ? disabledCards() : unflipCards();
    
        // do cards match?
        if (firstCard.dataset.name === secondCard.dataset.name) {
            // it's a match!
            disabledCards();
        } else {
            // not a match
            unflipCards();
        }
    }

    function disabledCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
    
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 36);
            card.style.order = randomPos;
        })
    })();

    cards.forEach((card) => card.addEventListener('click', flipCard));
};