import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './filtro/filtro.action';
import { filtroReducex } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appRedures: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducex,
};
