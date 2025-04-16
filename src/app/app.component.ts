import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactListComponent } from "./contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactListComponent, RouterModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
}
