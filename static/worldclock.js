'use-strict';

const displayError = document.querySelector('.worldclock-error');
const displayModal = document.querySelector('.worldclock-spandisplay');

const displayLocation = document.querySelector('.worldclock-spandisplay-title');

// const displayHours = document.querySelector('.worldclock-spandisplay--hours');
// const displayMinutes = document.querySelector('.worldclock-spandisplay--minutes');
// const displaySeconds = document.querySelector('.worldclock-spandisplay--seconds');
// const displaySessions = document.querySelector('.worldclock-spandisplay--session');


const searchInput = document.querySelector('.worldclock-spansearch-search');
const searchButton = document.querySelector('.worldclock-spansearch-button');

let timezone;

searchButton.addEventListener (
    'click', function () {

        timezone = searchInput.value;
        displayLocation.innerHTML = timezone;

        setInterval(() => { 

            let hh = luxon.DateTime.now().setZone(timezone).toFormat("hh");
            document.querySelector('.worldclock-spandisplay--hours').innerHTML = hh;
            
            let mm = luxon.DateTime.now().setZone(timezone).toFormat("mm");
            document.querySelector('.worldclock-spandisplay--minutes').innerHTML = mm;
            
            let ss = luxon.DateTime.now().setZone(timezone).toFormat("ss");
            document.querySelector('.worldclock-spandisplay--seconds').innerHTML = ss;

         } , 1000);

         let dateTimeValidity = luxon.DateTime.now().setZone(timezone).invalid; 

         if (dateTimeValidity == null) {
            displayModal.classList.remove('hidden');
            displayError.classList.add('hidden');

        } else {

            displayModal.classList.add('hidden');
            displayError.classList.remove('hidden');

        }
    }
)

// Asia/Kolkata
// Asia/Mumbai
// America/Toronto