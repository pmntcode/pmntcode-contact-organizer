import { ContactController } from "../controllers/contact.controller.js";

const controller = new ContactController();

const form = document.querySelector('#contactForm') as HTMLFormElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const phoneNumberInput = document.getElementById('phoneNumberInput') as HTMLInputElement;
    const name = nameInput.value;
    const phoneNumber = phoneNumberInput.value;
    controller.addContact(name, phoneNumber);
    clearContactFormInputFields(nameInput, phoneNumberInput);
    renderContacts();
});

function clearContactFormInputFields(nameInput: HTMLInputElement, phoneNumberInput: HTMLInputElement) {
    nameInput.value = '';
    phoneNumberInput.value = '';
}

function renderContacts() {
    const contactList = document.getElementById('contactList') as HTMLUListElement;
    contactList.innerHTML = '';
    controller.getAllContacts().forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.phoneNumber}`;
        contactList.appendChild(li);
    });
}