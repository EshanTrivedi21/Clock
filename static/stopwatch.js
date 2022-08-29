const startButton = document.querySelector(".stopwatch-startButton");
const lapButton = document.querySelector(".stopwatch-lapButton");
const resetButton = document.querySelector(".stopwatch-resetButton");

const stopwatchHours = document.querySelector("#outputHours");
const stopwatchMinutes = document.querySelector("#outputMinutes");
const stopwatchSeconds = document.querySelector("#outputSeconds");
const stopwatchMiliSeconds = document.querySelector("#outputMiliSeconds");

const lapNumber = document.querySelector('.stopwatch-lap-number');
const lapTime = document.querySelector('.stopwatch-lap-time');

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayMilisec = miliseconds;
let displaySec = seconds;
let displayMins = minutes;
let displayHours = hours;

let interval = null;

let statusOnOff = "stopped";

let lapNum = 0;
let lapTim = 0;
let lapNumNow = null;
let lapTimeNow = null;

lapButton.disabled = true;
resetButton.disabled = true;

function start () {
    miliseconds++;

    if (miliseconds < 10) displayMilisec = "0" + miliseconds.toString();
    else displayMilisec = miliseconds;

    if (seconds < 10) displaySec = "0" + seconds.toString();
    else displaySec = seconds;

    if (minutes < 10) displayMins = "0" + minutes.toString();
    else displayMins = minutes;

    if (hours < 10) displayHours = "0" + hours.toString();
    else displayHours = hours;

    if (miliseconds / 100 === 1) {
        seconds++;
        miliseconds = 0;
    
        if (seconds / 60 === 1) {
          minutes++;
          seconds = 0;
    
            if (minutes / 60 === 1) {
                hours++;
                minutes = 0;
            }
        }
    }

    stopwatchMiliSeconds.innerHTML = displayMilisec;
    stopwatchSeconds.innerHTML = displaySec;
    stopwatchMinutes.innerHTML = displayMins;
    stopwatchHours.innerHTML = displayHours;

}

function startStop () {
    if (statusOnOff === "stopped") {
        lapButton.disabled = false;
        resetButton.disabled = false;
        interval = setInterval(start, 10);
        startButton.innerHTML = "STOP";
        statusOnOff = "started";
      } else {
        lapButton.disabled = true;
        clearInterval(interval);
        startButton.innerHTML = "START";
        statusOnOff = "stopped";
      }
}

function reset () {
    clearInterval(interval);

    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    stopwatchMiliSeconds.innerHTML = "00";
    stopwatchSeconds.innerHTML = "00";
    stopwatchMinutes.innerHTML = "00";
    stopwatchHours.innerHTML = "00";

    startButton.innerHTML = "START";
    statusOnOff = "stopped";

    lapNumber.innerHTML = '';
    lapNum = 0;

    lapTime.innerHTML = '';
    lapTim = 0;

    lapButton.disabled = true;
    resetButton.disabled = true;
}

function lap () {

    if ( lapNum < 7 ) {
        lapNum++;
        lapNumNow = `<div> Lap ${lapNum} </div>`;
        lapNumber.innerHTML += lapNumNow;
    }

    if ( lapTim < 7 ) {
        lapTim++;
        lapTimeNow = `<div class="lap">${displayHours} : ${displayMins} : ${displaySec} : ${displayMilisec}</div>`;
        lapTime.innerHTML += lapTimeNow;
    }
}


startButton.addEventListener (
    'click', startStop
)

lapButton.addEventListener (
    'click', lap
)

resetButton.addEventListener (
    'click', reset
)