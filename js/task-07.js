const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

const changeFontSize = (event) => {
    refs.input = event.target.value;
    refs.text.style.fontSize = `${refs.input}px`;
};

refs.input.addEventListener('input', changeFontSize);

