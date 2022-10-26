import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driver-user-form',
  templateUrl: './template-driver-user-form.component.html',
  styleUrls: ['./template-driver-user-form.component.scss']
})
export class TemplateDriverUserFormComponent implements OnInit {

  user = {
    username: 'romain',
    active: false,
    role: 'admin'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
