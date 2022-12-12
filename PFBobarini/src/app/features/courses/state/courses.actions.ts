import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/courses';

export const loadCourses = createAction(
  '[Courses] Load Courses'
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()
);
