import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  open = false;
  value = 'Dog';
  items = ['Dog', 'Cat', 'Hamster'];

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: string) {
    this.value = item;
    this.open = false;
  }
}
