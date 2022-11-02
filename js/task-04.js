let counterValue = 0;
const counterClick = document.querySelector('#counter');
const counterDisplay = document.querySelector('#value');

counterClick.addEventListener('click', (event) => {
    if (event.target.dataset.action === "increment") {
        counterValue += 1;
    } else if (event.target.dataset.action === "decrement") {
        counterValue -= 1;
    }
    counterDisplay.textContent = counterValue;
});

