import { Contact } from "./contact.model.js";
export class ContactList {
    contacts;
    constructor() {
        this.contacts = [];
    }
    addContact(name, phoneNumber) {
        const contact = new Contact(name, phoneNumber);
        this.contacts.push(contact);
    }
    getAllContacts() {
        return this.contacts;
    }
    getContactByName(name) {
        return this.contacts.find(contact => contact.name === name);
    }
}
