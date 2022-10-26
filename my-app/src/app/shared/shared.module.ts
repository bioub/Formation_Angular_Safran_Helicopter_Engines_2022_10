import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, // en exportant CommonModule, un module qui importera
    // SharedModule importera aussi CommonModule
    SelectComponent,
  ]
})
export class SharedModule { }
