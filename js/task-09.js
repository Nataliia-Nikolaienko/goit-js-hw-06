function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

const onColorChange = (event) => {
  
   refs.span.textContent = getRandomHexColor(event);
   refs.body.style.backgroundColor = `${getRandomHexColor(event)}`;
};

refs.button.addEventListener('click', onColorChange);

