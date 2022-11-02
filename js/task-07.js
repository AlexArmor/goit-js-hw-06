const refs = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.slider.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
});