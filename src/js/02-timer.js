import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs } from "../helpers/02-convert-time";

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMin = document.querySelector('[data-minutes]');
const timerSec = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');
const startEl = document.querySelector('[data-start]');

startEl.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        // console.log(selectedDates[0]);
      if (selectedDates[0] < Date.now()) {
        alert('Please choose a date in the future')
      } else {
        startEl.disabled = false;
      }

      startEl.addEventListener('click', onStart);
    
      function onStart() {
        startEl.disabled = true;
        inputEl.disabled = true;
  
        const IntId = setInterval(() => {
        const currentDate = Date.now();
        const difference = selectedDates[0] - currentDate;

        if (difference < 1000) {
            clearInterval(IntId);
        }

            const timer = convertMs(difference);

            timerDays.textContent = timer.days.toString().padStart(2, 0);
            timerHours.textContent = timer.hours.toString().padStart(2, 0);
            timerMin.textContent = timer.minutes.toString().padStart(2, 0);
            timerSec.textContent = timer.seconds.toString().padStart(2, 0);
        }, 1000)
    }
    },

  };


const flatpickr = require("flatpickr");
flatpickr(inputEl, options);


