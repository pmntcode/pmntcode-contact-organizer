import { ContactController } from "../controller/ContactController.js";
const controller = new ContactController();
function renderContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    controller.contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name}: ${contact.phoneNumber}`;
        contactList.appendChild(li);
    });
}
