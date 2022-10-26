import { Directive, DoCheck, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRequired]',
})
export class RequiredDirective implements OnInit {

  // @Input() invalidClass = 'invalid';
  // @Input() validClass = 'valid';

  @Input() appRequired = ['valid', 'invalid'];

  // private element: ElementRef;
  // constructor(element: ElementRef) {
  //   this.element = element;
  // }
  constructor(private element: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const [validClass, invalidClass] = this.appRequired;

    const nativeElement = this.element.nativeElement;

    nativeElement.addEventListener('input', () => {
      nativeElement.classList.remove(invalidClass);
      nativeElement.classList.remove(validClass);
      if (nativeElement instanceof HTMLInputElement) {
        if (nativeElement.value === '') {
          nativeElement.classList.add(invalidClass);
        } else {
          nativeElement.classList.add(validClass);
        }
      }
    });
  }
}
