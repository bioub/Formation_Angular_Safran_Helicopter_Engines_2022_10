import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user = {
    username: 'romain',
    active: false,
    role: 'admin'
  };

  constructor() { }

  ngOnInit(): void {
  }

  setUserName(value: string) {
    this.user.username = value;
  }

}
