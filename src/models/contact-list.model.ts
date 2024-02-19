import { Contact } from "./contact.model.js";

export class ContactList {
    contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    addContact(name: string, phoneNumber: string) {
        const contact = new Contact(name, phoneNumber);
        this.contacts.push(contact);
    }

    getAllContacts(): Contact[] {
        return this.contacts;
    }

    getContactByName(name: string): Contact | undefined {
        return this.contacts.find(contact => contact.name === name);
    }
}