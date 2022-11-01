const refs = {
    input: document.querySelector('#name-input'),
    text: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', (event) => {
    if (event.target.value === "") {
        refs.text.textContent = "Anonymous";
    } else {
        refs.text.textContent = event.currentTarget.value;
    }
});