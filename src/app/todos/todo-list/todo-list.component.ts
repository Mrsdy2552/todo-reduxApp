import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { FiltroPipe } from '../filtro.pipe';
import { filtrosValidos } from '../../filtro/filtro.action';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, FiltroPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual!: filtrosValidos;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ filtro, todos }) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}
