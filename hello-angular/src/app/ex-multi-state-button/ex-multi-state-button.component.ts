import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-multi-state-button',
  templateUrl: './ex-multi-state-button.component.html',
  styleUrls: ['./ex-multi-state-button.component.scss']
})
export class ExMultiStateButtonComponent implements OnInit {

  items = ['Rouge', 'Vert', 'Bleu'];
  value = 'Vert';

  constructor() { }

  ngOnInit(): void {
  }

}
