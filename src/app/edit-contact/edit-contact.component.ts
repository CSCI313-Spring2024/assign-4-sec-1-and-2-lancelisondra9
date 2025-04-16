import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here

import { CONTACTS } from '../contact-list/contacts';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  standalone: true, // <-- Mark as standalone component
  imports: [FormsModule], // <-- Add FormsModule to imports array
})
export class EditContactComponent {
  contactIndex: number = -1;
  contact: any = {
    fName: '',
    lName: '',
    phoneNumber: '',
    email: '',
  };

  // Make router public
  constructor(public router: Router) {}

  ngOnInit(): void {
    // Simulate fetching contact by index or id
    // Replace with real logic
    this.contactIndex = 0; // For example, manually setting the contact index
    const existing = CONTACTS[this.contactIndex];
    if (existing) {
      this.contact = { ...existing };
    }
  }

  saveContact(): void {
    if (this.contactIndex >= 0) {
      CONTACTS[this.contactIndex] = this.contact;
      this.router.navigate(['/']);
    }
  }
}
