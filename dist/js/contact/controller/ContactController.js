import { Contact } from "../model/Contact.js";
export class ContactController {
    contacts;
    constructor() {
        this.contacts = [];
    }
    getContacts() {
        return this.contacts;
    }
    addContact(name, phoneNumber) {
        const contact = new Contact(name, phoneNumber);
        this.contacts.push(contact);
        console.log(contact);
    }
}
