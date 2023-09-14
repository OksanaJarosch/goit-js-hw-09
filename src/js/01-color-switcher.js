
const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
console.log(bodyEl);

startEl.addEventListener('click', onStart);

let onInterval = false;
stopEl.disabled = true;

function onStart() {
    const IntId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
        onInterval = true;
        console.log('I am ON');

        if (onInterval) {
            startEl.disabled = true;
            stopEl.disabled = false;
        } 

        stopEl.addEventListener('click', onStop);
        function onStop() {
            clearInterval(IntId);
            onInterval = false;
            startEl.disabled = false;
            stopEl.disabled = true;
        }
    }, 1000);
}

// random color function
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }