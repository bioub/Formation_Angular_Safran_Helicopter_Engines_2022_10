import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { Todo } from './todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    { id: Math.random(), title: 'ABC', completed: false },
    { id: Math.random(), title: 'DEF', completed: true },
  ];

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Todos');
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
