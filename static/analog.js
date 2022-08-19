"use-strict";

setInterval(displayTimeAnalog);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function displayTimeAnalog() {

    const dateTime =  new Date();

    let seconds = dateTime.getSeconds() / 60;
    let minutes = (seconds + dateTime.getMinutes()) / 60;
    let hours =  (minutes + dateTime.getHours()) / 12;

    setRotation(secondHand, seconds);

    setRotation(minuteHand, minutes);

    setRotation(hourHand, hours);

}

function setRotation (element, rotationRatio) {
    element.style.setProperty("--rotation" , rotationRatio * 360);
}

displayTimeAnalog();