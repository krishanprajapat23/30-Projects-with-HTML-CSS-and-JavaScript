window.onload = function() {
    let sec = 00;
    let tens = 00;
    let appendTens = document.getElementById("tens");
    let appendSec = document.getElementById("sec");
    let startBtn = document.getElementById("start-btn");
    let stopBtn = document.getElementById("stop-btn");
    let resetBtn = document.getElementById("reset-btn");
    let Interval;

    startBtn.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = function() {
        clearInterval(Interval);
    };

    resetBtn.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        sec = "00";
        appendTens.innerHTML = tens;
        appendSec.innerHTML = sec;
    };

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            sec++;
            appendSec.innerHTML = "0" + sec;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (sec > 9) {
            appendSec.innerHTML = sec;
        }
    }
};