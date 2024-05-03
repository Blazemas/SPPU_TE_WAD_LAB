import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';
  displayName = '';
  displayAddress = '';
  displayMobile = '';
  displayEmail = '';

  getValue(name: string, address: string, mobile: string, email: string): void {
    this.displayName = name;
    this.displayAddress = address;
    this.displayMobile = mobile;
    this.displayEmail = email;
  }
}
