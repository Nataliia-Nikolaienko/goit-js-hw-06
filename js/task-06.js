const validationInput = document.querySelector('#validation-input');


function onBlur(event) {
    const inputValue = event.currentTarget;
    const inputLength = Number(validationInput.dataset.length);

    if (inputValue.value.length === inputLength) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    } else {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
};


validationInput.addEventListener('blur', onBlur);



