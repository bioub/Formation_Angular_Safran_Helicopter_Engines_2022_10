import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // preserveWhitespaces: true
})
export class AppComponent {
  prenom = 'Romain';
name= 'Romain'


  showClock = true;
  format = 'HH:mm';
  delay = 2000;
}
