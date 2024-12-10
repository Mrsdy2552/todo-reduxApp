import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
  txtInut!: FormControl;
  constructor(private store: Store<AppState>) {
    this.txtInut = new FormControl('', Validators.required);
  }
  agregar() {
    if (this.txtInut.invalid) {
      return;
    }

    this.store.dispatch(action.crear({ texto: this.txtInut.value }));
    this.txtInut.reset();
  }
}
