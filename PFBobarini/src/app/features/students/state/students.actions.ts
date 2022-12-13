import { createAction, props } from '@ngrx/store';
import { Students } from 'src/app/models/students';

export const loadStudents = createAction(
  '[Students] Load Students'
);

export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ students: Students[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students] Load Students Failure',
  props<{ error: any }>()
);
