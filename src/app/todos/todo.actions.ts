import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] crear Todo',
  props<{ texto: string }>()
);
export const limpiarTodos = createAction(
  '[TODO] limpiar Todo'
   
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);
export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; texto: string }>()
);
export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
);

// toggleall
export const toggleall = createAction(
  '[TODO] Toggle all Todo',
  props<{ completado: boolean }>()
);
