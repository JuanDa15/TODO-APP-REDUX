import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/App.state';
import { Todo } from 'src/app/models/todo.model';
import { toggleCompleted, update, deleteTodo } from 'src/app/redux/todo.actions';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent {
  public store: Store<AppState> = inject(Store)
  public editing = false;
  public isCompleted = false;
  public description = '';
  public todo!: Todo;

  @Input() set setTodo(todo: Todo) {
    this.todo = todo;
    this.isCompleted = this.todo.completed;
    this.description = this.todo.text;
  };

  openEditing(element: HTMLInputElement) {
    this.editing = true;
    setTimeout(() => {
      element.select();
    },0)
  }

  toogleTodoStatus() {
    this.store.dispatch(toggleCompleted({
      id: this.todo.id,
      status: this.isCompleted
    }))
  }

  deleteTodo() {
    this.store.dispatch(deleteTodo({
      id: this.todo.id
    }))
  }

  closeEditing() {
    this.editing = false;
  }

  saveTodo() {
    if (this.description.length === 0) {
      this.description = this.todo.text;
      return;
    }

    if (this.description === this.todo.text) {
      return;
    }

    this.store.dispatch(update({
      id: this.todo.id,
      text: this.description
    }))
  }
}
