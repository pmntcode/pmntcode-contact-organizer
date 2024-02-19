import { ContactController } from "../ContactController.js";
const controller = new ContactController();
const form = document.querySelector('#contactForm');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const name = nameInput.value;
    const phoneNumber = phoneNumberInput.value;
    controller.addContact(name, phoneNumber);
});
