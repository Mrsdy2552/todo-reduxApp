import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.action';

@Pipe({
  name: 'filtroTodo',
  standalone: true,
})
export class FiltroPipe implements PipeTransform {
  transform(todo: Todo[], filtro: filtrosValidos): Todo[] {
 
    switch (filtro) {
      case 'completados':
        return todo.filter((todo) => todo.competado);
      case 'pendientes':
        return todo.filter((todo) => !todo.competado);
      case 'todos':
        return todo;
    }
  }
}
