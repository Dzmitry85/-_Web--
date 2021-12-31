const dateCalcContainer = document.getElementById("datecalc__container");
const timerContainer = document.getElementById("timer__container");

export var appSwitch = {
    calcapp: () => {
        timerContainer.innerHTML = "";
        dateCalcContainer.innerHTML = `<form id="datecalc">
                <h3>Калькулятор дат</h3>
                <label>
                    <strong>Первая дата:</strong>
                    <input type="date" name="firstDate" />
                </label>
                <label>
                    <strong>Вторая дата:</strong>
                    <input type="date" name="secondDate" />
                </label>
                <button type="submit">Рассчитать промежуток</button>
                <p id="datecalc__result"></p>
            </form>`;
        import("./getDateDiff.js").then((resolve) => {
             });
    },
    timerapp: () => {
        dateCalcContainer.innerHTML = "";
        timerContainer.innerHTML = `<from id="timer">
        <div>Hour: <span id="hour"></span></div>
        <div>Minute: <span id="minute"></span></div>
        <div>Second: <span id="seconds"></span></div>
        
        <button id="start-btn">Start</button>
        <button id="stop-btn">Stop</button>
        <button id="reset-btn">Reset</button>
        <p id="timer_result"></p>
      </from> `;
        import("./timer.js").then((resolve) => {
                 });
    },
};