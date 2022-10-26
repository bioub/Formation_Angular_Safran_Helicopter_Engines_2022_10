import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    TodosModule, // WARNING: attention à l'ordre
    UsersModule,
    AppRoutingModule, // EN DERNIER Attention à la wildcard **
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
