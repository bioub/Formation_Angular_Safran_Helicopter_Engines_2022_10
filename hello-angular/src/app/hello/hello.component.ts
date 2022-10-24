import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  name = 'Jean-Philippe';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'Jean-Philippe';
    }, 3000);
  }

  upperCase(str: string) {
    console.log('upperCase called');
    return str.toUpperCase();
  }
}
