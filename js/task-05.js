
const refs = {
    inputEl: document.querySelector('#name-input'),
    titleEl: document.querySelector('#name-output'),
};
const onInputEntering = event => {
    refs.titleEl.textContent = event.currentTarget.value.trim() !== '' ? event.currentTarget.value : 'Anonymous';
};

refs.inputEl.addEventListener('input', onInputEntering);

// function onInputEntering(event) {       
//     if (event.currentTarget.value.trim() !== '') {
//         refs.titleEl.textContent = event.currentTarget.value;
//     } else {
//         refs.titleEl.textContent = 'Anonymous'
//     };
// };
    
