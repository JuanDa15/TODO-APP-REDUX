import { createReducer, on } from "@ngrx/store";
import { clearCompleted, create, deleteTodo, toggleAll, toggleCompleted, update } from "./todo.actions";
import { Todo } from "../models/todo.model";
import { getFromStorage, saveInStorage } from "../storage";

const LOCAL_STORAGE = 'TODOS'
const initialState: Todo[] = getFromStorage(LOCAL_STORAGE) || [];
export const todoReducer = createReducer(initialState,
  on(create, (state, { text }) => {
    const newState = [...state, new Todo(text)]
    saveInStorage<Todo[]>(LOCAL_STORAGE, newState)
    return newState
  }),
  on(toggleCompleted, (state, { id, status }) => {
    const newState: Todo[] = structuredClone(state);
    const todoIndex = newState.findIndex(todo => todo.id === id);
    newState[todoIndex].completed = status;
    saveInStorage<Todo[]>(LOCAL_STORAGE, newState)
    return newState;
  }),
  on(deleteTodo, (state, { id }) => {
    const newState: Todo[] = structuredClone(state);
    const index = newState.findIndex(todo => todo.id === id);
    newState.splice(index, 1);
    saveInStorage<Todo[]>(LOCAL_STORAGE, newState)
    return newState;
  }),
  on(update, (state, { id, text}) => {
    const newState: Todo[] = structuredClone(state);
    const todoIndex =  newState.findIndex(todo => todo.id === id);
    newState[todoIndex].text = text;
    saveInStorage<Todo[]>(LOCAL_STORAGE, newState);
    return newState;
  }),
  on(toggleAll, (state, { completed }) => {
    const newState: Todo[] = structuredClone(state);
    newState.forEach(todo => todo.completed = completed);
    saveInStorage<Todo[]>(LOCAL_STORAGE, newState);
    return newState;
  }),
  on(clearCompleted, (state) => {
    let newState: Todo[] = structuredClone(state);
    newState = newState.filter(todo => !todo.completed);
    saveInStorage<Todo[]>(LOCAL_STORAGE, newState);
    return newState;
  })
)
