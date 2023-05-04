import { createReducer, on } from "@ngrx/store";
import { ValidFilters, setFilter } from "./filter.actions";

const initialState: ValidFilters = 'active';

export const filterReducer = createReducer(
  initialState as ValidFilters,
  on(setFilter, ( state, { filter } ) => filter)
)
