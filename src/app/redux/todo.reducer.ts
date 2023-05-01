import { createReducer, on } from "@ngrx/store";
import { create } from "./todo.actions";
import { Todo } from "../models/todo.model";

const initialState: Todo[] = [];
export const TodoReducer = createReducer(initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
)
