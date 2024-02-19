import { ContactController } from "../controllers/contact.controller.js";
const controller = new ContactController();
const form = document.querySelector('#contactForm');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const name = nameInput.value;
    const phoneNumber = phoneNumberInput.value;
    controller.addContact(name, phoneNumber);
    clearContactFormInputFields(nameInput, phoneNumberInput);
    renderContacts();
});
function clearContactFormInputFields(nameInput, phoneNumberInput) {
    nameInput.value = '';
    phoneNumberInput.value = '';
}
function renderContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    controller.getAllContacts().forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.phoneNumber}`;
        contactList.appendChild(li);
    });
}
