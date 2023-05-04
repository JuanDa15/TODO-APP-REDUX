import { createAction, props } from "@ngrx/store";

export type ValidFilters = 'all' | 'active' | 'completed';
export const setFilter = createAction(
  '[Filter] Set filter',
  props<{filter: ValidFilters}>()
)
