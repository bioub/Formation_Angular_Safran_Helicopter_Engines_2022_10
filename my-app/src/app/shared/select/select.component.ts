import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent implements OnInit {

  open = false;
  @Input() value = 'Dog';
  @Input() items = ['Dog', 'Cat', 'Hamster'];

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: string) {
    this.value = item;
    this.open = false;
    this.valueChange.emit(item);
  }
}
