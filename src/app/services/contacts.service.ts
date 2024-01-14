import { Injectable } from '@angular/core';
import Contact from '../model/Contact';
import ContactItem from '../model/ContactItem';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contact: Contact;

  constructor() {
    this.contact = new Contact;
   }

    addItem(name: string, phone: string) {
      let contact = new ContactItem(name, phone);
      this.contact.add(contact);
    }

    deleteItem(contact: any) {
      this.contact.delete(contact);
    }
}
