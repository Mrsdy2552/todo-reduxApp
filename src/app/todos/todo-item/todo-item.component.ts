import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtinputFisico: ElementRef | undefined;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editanto: boolean = false;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    // this.todo.competado = true;
    this.chkCompletado = new FormControl(this.todo.competado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(action.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editanto = true;
    setTimeout(() => {
      this.txtinputFisico?.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editanto = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(
      action.editar({ id: this.todo.id, texto: this.txtInput.value })
    );
  }
  borrar() {
    this.store.dispatch(action.borrar({ id: this.todo.id }));
  }
}
