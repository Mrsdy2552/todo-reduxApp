import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../../filtro/filtro.action';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css',
})
export class TodoFooterComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  fltroActual: action.filtrosValidos = 'todos';
  filtros: action.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.fltroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.competado).length;
    });
  }

  cambiarFiltro(_t5: action.filtrosValidos) {
    this.store.dispatch(action.setFiltro({ filtro: _t5 }));
  }

  clearComplet() {
    this.store.dispatch(limpiarTodos());
  }
}
