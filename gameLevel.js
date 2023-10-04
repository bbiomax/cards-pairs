export function renderLevel({ gameEl }) {
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
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>
</div>`;

    gameEl.innerHTML = gameHtml;
}
