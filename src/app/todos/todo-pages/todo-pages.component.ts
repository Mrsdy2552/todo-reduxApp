import { Component } from '@angular/core';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../todo.actions';

@Component({
  selector: 'app-todo-pages',
  standalone: true,
  imports: [TodoAddComponent, TodoListComponent, TodoFooterComponent],
  templateUrl: './todo-pages.component.html',
  styleUrl: './todo-pages.component.css',
})
export class TodoPagesComponent {
  constructor(private store: Store<AppState>) {}
  completado = false;
  toggleall() {
    this.completado = !this.completado;
    this.store.dispatch(action.toggleall({ completado: this.completado }));
    console.log(this.completado);
  }
}
