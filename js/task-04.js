const refs = {
    value: document.querySelector('#value'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
}

let counterValue = 0;

const render = () => {
    refs.value.textContent = counterValue; 
};

const handleIncrement = () => {
    counterValue += 1;
    render();
};

const handleDecrement = () => {
    counterValue -= 1;
    render();
};

render();

refs.increment.addEventListener('click', handleIncrement);
refs.decrement.addEventListener('click', handleDecrement);