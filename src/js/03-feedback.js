
"use strict"

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const throttleSaveFormState = throttle(saveFormState, 500);

function saveFormState() {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};
function loadFromState() {
    const saveState = localStorage.getItem('feedback-form-state');
    if (saveState) {
        const { email, message } = JSON.parse(saveState);
        emailInput.value = email,
        messageInput.value = message;
    }
}

form.addEventListener("input", throttleSaveFormState);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log('Form data:', formData);
    localStorage.removeItem('feedback-form-state')
    
    emailInput.value = '';
    messageInput.value = '';
});
loadFromState();

