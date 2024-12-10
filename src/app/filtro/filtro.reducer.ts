import { createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.action';
import { Todo } from '../todos/models/todo.model';

export const initialState = 'todos' as filtrosValidos;

export const filtroReducex = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);
