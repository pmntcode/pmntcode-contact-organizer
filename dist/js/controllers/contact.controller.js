import { ContactList } from "../models/contact-list.model.js";
export class ContactController {
    contactList;
    constructor() {
        this.contactList = new ContactList();
    }
    getAllContacts() {
        return this.contactList.getAllContacts();
    }
    addContact(name, phoneNumber) {
        this.contactList.addContact(name, phoneNumber);
    }
}
