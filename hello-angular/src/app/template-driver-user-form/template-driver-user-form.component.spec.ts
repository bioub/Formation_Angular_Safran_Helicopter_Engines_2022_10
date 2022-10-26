import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriverUserFormComponent } from './template-driver-user-form.component';

describe('TemplateDriverUserFormComponent', () => {
  let component: TemplateDriverUserFormComponent;
  let fixture: ComponentFixture<TemplateDriverUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDriverUserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDriverUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
