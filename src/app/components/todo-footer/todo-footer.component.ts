import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/App.state';
import { ValidFilters, setFilter } from 'src/app/redux/filter.actions';
import { clearCompleted } from 'src/app/redux/todo.actions';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent {
  public store: Store<AppState> = inject(Store)
  public keepOrder = (a: any,b: any)=>a.key;
  public filters = {
    'all': 'All',
    'active': 'Active',
    'completed': 'Completed'
  }

  get pendingTodos$() {
    return this.store.select( ({todos}) => todos).pipe(map((todos) => {
      let pendings = todos.filter(todo => !todo.completed).length
      return pendings
    }))
  }

  public updateFilter(filter: string) {
    this.store.dispatch(setFilter({
      filter: filter as ValidFilters
    }))
  }

  public deletCompleted() {
    this.store.dispatch(clearCompleted())
  }
}
