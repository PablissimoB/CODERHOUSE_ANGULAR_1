import { Action, createReducer, on } from '@ngrx/store';
import * as StudentsActions from './students.actions';

export const studentsFeatureKey = 'students';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(StudentsActions.loadStudents, state => state),
  on(StudentsActions.loadStudentsSuccess, (state, action) => state),
  on(StudentsActions.loadStudentsFailure, (state, action) => state),

);
