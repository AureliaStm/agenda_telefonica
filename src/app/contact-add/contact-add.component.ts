import { Component, Input, OnInit } from '@angular/core';
import ContactItem from '../model/ContactItem';
import { ContactsService } from '../services/contacts.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent implements OnInit {

  @Input() contact: ContactItem;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  phone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{6,}')]);

  constructor(public contactsService: ContactsService,
    public formBuilder: FormBuilder) { }

  contactForm = this.formBuilder.group({
    name: this.name, 
    phone: this.phone
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process data here
    console.warn('Your contact has been saved', this.contactForm.value);
    this.contactsService.addItem(this.contactForm.value.name!, this.contactForm.value.phone!);
    this.contactForm.reset();
  }
}
