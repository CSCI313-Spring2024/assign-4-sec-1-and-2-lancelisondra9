import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { CONTACTS } from './contacts';



@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AddContactComponent],
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {
  contacts = CONTACTS;


  deleteContact(index: number) {
    this.contacts.splice(index, 1); // Remove the contact from the array
  }

  addContact(contact: any) {
    this.contacts.push(contact);
  }
  
}
