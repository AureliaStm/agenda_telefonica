import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ContactItem from '../model/ContactItem';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: ContactItem;

  constructor(public contactsService: ContactsService) { }


  ngOnInit(): void {
  }

}
