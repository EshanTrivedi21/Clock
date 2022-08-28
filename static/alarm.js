"use-strict";

const set = document.querySelector(".alarm-set");
const disable = document.querySelector(".alarm")

const setHours = document.querySelector("#setHours");
const setMinutes = document.querySelector("#setMinutes");
const setSeconds = document.querySelector("#setSeconds");
const setTimeset = document.querySelector("#setTimeset");

let alarmTime, isAlarmSet;

let ringtone = new Audio("assets/ringtone.mp3");

setInterval(() => {
    let dateTime =  new Date();

    let hours =  dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let timeset = '';

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

    
    let currentTime = `${hours}:${minutes}:${seconds} ${timeset}`;
    console.log(currentTime);
    
    if (currentTime == alarmTime) {
        
        ringtone.play();
        ringtone.loop = true;

    }
});

function setAlarm () {

    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        disable.classList.remove("disable");
        set.innerText = "SET ALARM";
        return isAlarmSet = false;
    }

    let setTime = `${setHours.value}:${setMinutes.value}:${setSeconds.value} ${setTimeset.value}`;

    alarmTime = setTime;
    isAlarmSet = true;
    disable.classList.add("disable");
    set.innerText = "DISMISS ALARM";

}

set.addEventListener(
    'click', setAlarm
)