import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { filterReducer } from "./redux/fiilter.reducer";
import { todoReducer } from "./redux/todo.reducer";
import { ValidFilters } from "./redux/filter.actions";

export interface AppState {
  todos: Todo[],
  filters: ValidFilters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer
}
