import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/App.state';
import { Todo } from 'src/app/models/todo.model';
import { ValidFilters } from 'src/app/redux/filter.actions';
import { toggleAll } from 'src/app/redux/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [
  ]
})
export class TodoPageComponent implements OnInit{
  public store: Store<AppState> = inject(Store);
  public todosObs$ = this.store.select('todos');
  public filterObs$ = this.store.select('filters');
  title = 'todo-app-redux';
  public markAll: boolean = false;
  public todos: Todo[] = [];
  public selectedFilter: ValidFilters = 'all';

  get todosQuantity$() {
    return this.todosObs$.pipe(map(val => val.length || 0))
  }

  ngOnInit(): void {
    this.todosObs$.subscribe({
      next: (val) => this.todos = val
    })
    this.filterObs$.subscribe({
      next: (val) => this.selectedFilter = val
    })
  }

  toggleAll(){
    this.markAll = !this.markAll;
    this.store.dispatch(toggleAll({
      completed: this.markAll
    }))
  }
}
