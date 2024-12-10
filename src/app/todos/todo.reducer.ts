import { createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  limpiarTodos,
  toggle,
  toggleall,
} from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('Compras'),
  new Todo('robar'),
  new Todo('estudiar'),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggleall, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        competado: completado,
      };
    })
  ),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          competado: !todo.competado,
        };
      }
      return todo;
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      }
      return todo;
    });
  }),
  on(limpiarTodos, (state) => state.filter(todo => !todo.competado))
);
