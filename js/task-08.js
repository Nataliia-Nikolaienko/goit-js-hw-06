
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

const message = 'Всі поля мають бути заповнені';

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
            mail,
            password,
        };

    if (mail === '' || password === '') {
        alert(message);
    } else {
        console.log(formData);
        event.currentTarget.reset();
    };
   
};