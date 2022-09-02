"use-strict";

const set = document.querySelector(".timer-set");
const disable = document.querySelector(".timer");

const setHours = document.querySelector("#setHours");
const setMinutes = document.querySelector("#setMinutes");
const setSeconds = document.querySelector("#setSeconds");

let isTimerSet;

let ringtone = new Audio("assets/ringtone.mp3");

let setMiliSeconds;

function time() {

    let dateTime =  new Date();

    let hours =  dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    targetHours = Number(hours) + Number(setHours.value);
    targetMinutes = Number(minutes) + Number(setMinutes.value);
    targetSeconds = Number(seconds) + Number(setSeconds.value);

    const x = setInterval(() => {
        let dateTime =  new Date();

        let currentHours =  dateTime.getHours();
        let currentMinutes = dateTime.getMinutes();
        let currentSeconds = dateTime.getSeconds();

        let remainingHours = targetHours - currentHours;
        let remainingMinutes = targetMinutes - currentMinutes;
        let remainingSeconds = targetSeconds - currentSeconds;
        
        let remainingTime = `${remainingHours} : ${remainingMinutes} : ${remainingSeconds}`;
        console.log(remainingTime);

        if (remainingTime == '0 : 0 : 0') {
            ringtone.play();
            ringtone.loop = true;
            clearInterval(x);
        }

        if (remainingHours < 0 && remainingMinutes < 0 && remainingSeconds < 0) {clearInterval(x)};

        remainingSeconds < 10 ? remainingSeconds = "0" + `${remainingSeconds}`: remainingSeconds;

    }, 1000);
    
    if (isTimerSet) {
        ringtone.pause();
        disable.classList.remove("disable");
        set.innerText = "START TIMER";
        return isTimerSet = false;
    }

    isTimerSet = true;
    disable.classList.add("disable");
    set.innerText = "DISMISS ALARM";
    
}