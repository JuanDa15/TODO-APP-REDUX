import { createAction, props } from "@ngrx/store";

export const create = createAction(
  '[TODO] Create',
  props<{text: string}>()
)

export const toggleCompleted = createAction(
  '[TODO] Toogle status',
  props<{id: string, status: boolean}>()
)

export const update = createAction(
  '[TODO] Update',
  props<{id: string, text: string}>()
)

export const deleteTodo = createAction(
  '[TODO] Delete',
  props<{id: string}>()
)

export const toggleAll = createAction(
  '[TODO] Toggle all',
  props<{completed: boolean}>()
)

export const clearCompleted = createAction(
  '[TODO] Clear completed'
)
