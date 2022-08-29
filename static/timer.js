"use-strict";

const set = document.querySelector(".timer-set");
const disable = document.querySelector(".timer");

const setHours = document.querySelector("#setHours");
const setMinutes = document.querySelector("#setMinutes");
const setSeconds = document.querySelector("#setSeconds");

let isTimerSet;

let ringtone = new Audio("assets/ringtone.mp3");

let setMiliSeconds;

setInterval(() => {
    let dateTime =  new Date();

    let hours =  dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    if ( hours >= 12 ) {
        hours = hours - 12;
        timeset = 'Pm';
    } else {
        timeset = 'Am';
    }

    if ( seconds <= 9 ) {
        seconds = "0" + `${seconds}`;
    } 

    if ( minutes <= 9 ) {
        minutes = "0" + `${minutes}`;
    } 

    if ( hours <= 9 ) {
        hours = "0" + `${hours}`;
    } 

    setMiliSeconds = Number(setSeconds.value)*1000;

    // ringtone.play();
    // ringtone.loop = true

    set.addEventListener(
        'click', function () {
            setTimeout (setTimer, setMiliSeconds);
            function setTimer () {

                if (isTimerSet) {
                    ringtone.pause();
                    disable.classList.remove("disable");
                    set.innerText = "START TIMER";
                    return isTimerSet = false;
                }

                disable.classList.add("disable");
                set.innerText = "DISMISS TIMER";

                isTimerSet = true;

            }
        }
    )

});