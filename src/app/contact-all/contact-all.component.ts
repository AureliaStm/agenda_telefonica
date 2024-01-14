import { Component, OnInit } from '@angular/core';
import Contact from '../model/Contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-all',
  templateUrl: './contact-all.component.html',
  styleUrls: ['./contact-all.component.css']
})
export class ContactAllComponent implements OnInit {

  constructor (public contactsService: ContactsService) {}

  ngOnInit(): void {
  }


  onDelete(contact: Contact): void {
    this.contactsService.deleteItem(contact);
  }
}
