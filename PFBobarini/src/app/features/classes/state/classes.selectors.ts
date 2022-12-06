import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClasses from './classes.reducer';

export const selectClassesState = createFeatureSelector<fromClasses.ClassesState>(
  fromClasses.classesFeatureKey
);

export const selectClassesCargando = createSelector(
  selectClassesState,
  (state) => state.classes
)