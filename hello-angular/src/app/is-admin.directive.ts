import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIsAdmin]',
})
export class IsAdminDirective implements OnInit {
  admin = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.admin) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
