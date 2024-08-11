// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle the subscribe form submission
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            alert(`Thank you for subscribing, ${email}!`);
            subscribeForm.reset();
        });
    }
});
