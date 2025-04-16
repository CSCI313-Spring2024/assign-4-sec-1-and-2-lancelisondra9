import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONTACTS } from '../contact-list/contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
})
export class AddContactComponent {
  newContact = {
    fName: '',
    lName: '',
    phoneNumber: '',
    email: '',
  };

  constructor(private router: Router) {}

  addContact() {
    CONTACTS.push(this.newContact);
    this.router.navigate(['/']);
  }
}
