import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './App.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public store: Store<AppState> = inject(Store);
  public todosObs$ = this.store.select('todos');
  title = 'todo-app-redux';

  get todosQuantity$() {
    return this.todosObs$.pipe(map(val => val.length || 0))
  }

}
