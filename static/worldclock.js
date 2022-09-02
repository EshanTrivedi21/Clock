'use-strict';

const displayError = document.querySelector('.worldclock-error');
const displayModal = document.querySelector('.worldclock-spandisplay');

const displayLocation = document.querySelector('.worldclock-spandisplay-text');
const displayTime = document.querySelector('.worldclock-spandisplay-time');

const searchInput = document.querySelector('.worldclock-spansearch-search');
const searchButton = document.querySelector('.worldclock-spansearch-button');

searchButton.addEventListener (
    'click', function () {

        let timezone = searchInput.value;

        function worldclock () {

            if (luxon.DateTime.now().setZone(timezone).invalid == null) {

                let dateTime = luxon.DateTime.now().setZone(timezone).toFormat("HH:mm:ss");
    
                displayLocation.innerHTML = timezone;
                displayTime.innerHTML = dateTime;
    
                displayModal.classList.remove('hidden');
                displayError.classList.add('hidden');

            } else {

                displayModal.classList.add('hidden');
                displayError.classList.remove('hidden');

            }
        }

        setInterval(() => { worldclock() } , 1000);
    }
)

// Asia/Kolkata
// Asia/Mumbai