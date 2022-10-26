import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  now = new Date();

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  private _interval!: any;

  constructor() {
    console.log('constructor', this.delay);
   }

  ngOnInit(): void {
    console.log('ngOnInit', this.delay);
    // this._interval = setInterval(() => {
    //   this.now = new Date();
    //   // detectChanges();
    // }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.delay);
    if (changes["delay"]?.currentValue !== changes["delay"]?.previousValue) {
      console.log('clearInterval');

      clearInterval(this._interval);
      this._interval = setInterval(() => {
        this.now = new Date();
        // detectChanges();
      }, this.delay);
    }
  }

  ngOnDestroy(): void {
    console.log('clearInterval');
    clearInterval(this._interval);
  }
}
