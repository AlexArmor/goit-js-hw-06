const inputField = document.querySelector("#validation-input");

const onInputBlur = event => {
    const inputLength = event.currentTarget.value.length;
    const dataAttributeLength = Number(inputField.dataset.length);

    if (inputLength === dataAttributeLength) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
}

inputField.addEventListener('blur', onInputBlur);