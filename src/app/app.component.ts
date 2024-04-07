import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ktest';
  phoneNumber = '919652187783'; // Replace this with the recipient's phone number
  message = 'Hello!'; // Replace this with the message you want to send

  getWhatsAppLink(): string {
    return 'https://wa.me/qr/WBCVANAL5LUFN1';
  }
}
