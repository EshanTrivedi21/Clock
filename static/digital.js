"use-strict";

function displayTimeDigital() {

    let dateTime =  new Date();

    let day = dateTime.getDay();
    let month = dateTime.getMonth();
    let date = dateTime.getDate();
    let year = dateTime.getFullYear();

    let hours =  dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    const session = document.getElementById("digital-clock--session");

    const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    dayWeek = weekday[day];

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    monthYear = months[month];

    if ( hours >= 12 ) {
        session.innerHTML = "Pm";
        hours = hours - 12;
    } else {
        session.innerHTML = "Am";
    };

    if ( seconds <= 9 ) {
        seconds = "0" + `${seconds}`;
    } 

    if ( minutes <= 9 ) {
        minutes = "0" + `${minutes}`;
    } 

    if ( hours <= 9 ) {
        hours = "0" + `${hours}`;
    } 

    document.getElementById("digital-clock--hours").innerHTML = hours;
    document.getElementById("digital-clock--minutes").innerHTML = minutes;
    document.getElementById("digital-clock--seconds").innerHTML = seconds;
    document.getElementById("digital-clock--date").innerHTML = dayWeek + " , " + date + " " + monthYear + " " + year;

}

setInterval(displayTimeDigital);
