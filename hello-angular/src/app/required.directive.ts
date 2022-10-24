import { Directive, DoCheck, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRequired]',
})
export class RequiredDirective implements OnInit {
  // private element: ElementRef;
  // constructor(element: ElementRef) {
  //   this.element = element;
  // }
  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const nativeElement = this.element.nativeElement;

    nativeElement.addEventListener('input', () => {
      nativeElement.classList.remove('invalid');
      nativeElement.classList.remove('valid');
      if (nativeElement instanceof HTMLInputElement) {
        if (nativeElement.value === '') {
          nativeElement.classList.add('invalid');
        } else {
          nativeElement.classList.add('valid');
        }
      }
    });
  }
}
