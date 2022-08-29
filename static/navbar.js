'use-strict';

const hamburgir = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

const anchorIndex = document.getElementsByClassName("a")[0];
const anchorAlarm = document.getElementsByClassName("a")[1];
const anchorTimer = document.getElementsByClassName("a")[2];
const anchorStopwatch = document.getElementsByClassName("a")[3];
const anchorWorldClock = document.getElementsByClassName("a")[4];

function reset () {
    navbarLinks.classList.toggle('active');
    document.querySelector(".hamburger").classList.toggle('hidden');     
}

hamburgir.addEventListener ( 
    'click' , function () {
        document.querySelector(".caption").classList.toggle('hidden');
        reset();
    }

)

anchorIndex.addEventListener ( 
    'click' , function () {
        location.href = "index.html";
        document.querySelector(".caption").classList.add('hidden');
        reset();
    }  
)

anchorAlarm.addEventListener ( 
    'click' , function () {
        location.href = "alarm.html";
        document.querySelector(".caption").classList.add('hidden');
        reset();
    }  
)

anchorTimer.addEventListener ( 
    'click' , function () {
        location.href = "timer.html";
        document.querySelector(".caption").classList.add('hidden');
        reset();
    }  
)

anchorStopwatch.addEventListener ( 
    'click' , function () {
        location.href = "stopwatch.html";
        document.querySelector(".caption").classList.add('hidden');
        reset();
    }  
)

anchorWorldClock.addEventListener ( 
    'click' , function () {
        // location.href = "worldclock.html";
        document.querySelector(".caption").classList.add('hidden');
        reset();
    }  
)