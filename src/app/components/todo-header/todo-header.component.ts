import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/App.state';
import { create } from 'src/app/redux/todo.actions';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styles: [
  ]
})
export class TodoHeaderComponent {
  public store: Store<AppState> = inject(Store);
  public TodoTest = '';

  public createTodo() {
    if (this.TodoTest.length === 0) {
      return;
    }
    this.store.dispatch(create({
      text: this.TodoTest
    }));
    this.TodoTest = '';
  }
}
