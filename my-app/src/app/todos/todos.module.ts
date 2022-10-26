import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  imports: [
    SharedModule,
    TodosRoutingModule,
  ],
  exports: [
    // TodosComponent,
  ]
})
export class TodosModule { }
