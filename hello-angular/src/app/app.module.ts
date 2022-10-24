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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CamelCasePipe,
    ClockComponent,
    UserFormComponent,
    CounterComponent,
    ExHelloworldComponent,
    ExMultiStateButtonComponent
  ],
  imports: [
    BrowserModule, // import indirect de CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
