import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent {
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

  }

  deleteTodo() {

  }

  closeEditing() {
    this.editing = false;
  }

  saveTodo() {
    console.log(this.description);
  }
}
