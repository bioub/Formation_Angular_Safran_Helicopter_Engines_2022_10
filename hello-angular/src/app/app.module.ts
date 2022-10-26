import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ClockComponent } from './clock/clock.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { ExHelloworldComponent } from './ex-helloworld/ex-helloworld.component';
import { ExMultiStateButtonComponent } from './ex-multi-state-button/ex-multi-state-button.component';
import { RequiredDirective } from './required.directive';
import { SelectComponent } from './select/select.component';
import { IsAdminDirective } from './is-admin.directive';
import { TemplateDriverUserFormComponent } from './template-driver-user-form/template-driver-user-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // component, pipe ou directive
    AppComponent,
    HelloComponent,
    CamelCasePipe,
    ClockComponent,
    UserFormComponent,
    CounterComponent,
    ExHelloworldComponent,
    ExMultiStateButtonComponent,
    RequiredDirective,
    SelectComponent,
    IsAdminDirective,
    TemplateDriverUserFormComponent
  ],
  imports: [
    BrowserModule, // import indirect de CommonModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
