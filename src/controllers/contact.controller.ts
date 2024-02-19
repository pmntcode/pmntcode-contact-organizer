import { Contact, ContactList } from "../models/contact.model.js";

export class ContactController {
    private contactList: ContactList;

    constructor() {
        this.contactList = new ContactList();
    }

    getAllContacts(): Contact[] {
        return this.contactList.getAllContacts();
    }

    addContact(name: string, phoneNumber: string): void {
        this.contactList.addContact(name, phoneNumber);
    }
}