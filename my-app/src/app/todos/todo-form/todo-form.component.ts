import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {
    title: '',
    completed: false,
  };

  @Output() add = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  emitTodo(event: SubmitEvent) {
    event.preventDefault();
    this.add.emit({ ...this.todo });
  }
}
