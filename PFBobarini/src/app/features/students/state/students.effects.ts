import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as StudentsActions from './students.actions';
import { StudentsService } from '../services/students.service';


@Injectable()
export class StudentsEffects {

  constructor(private actions$: Actions,
    private studentService: StudentsService) {}

  loadStudents$ = createEffect(
    () => {return this.actions$.pipe( 
      ofType(StudentsActions.loadStudents),
      mergeMap(
        () => this.studentService.getAll().pipe(
          map(data => StudentsActions.loadStudentsSuccess({students: data })),
          catchError(err => of(StudentsActions.loadStudentsFailure({error:err})))
        ))
      )
    });


  
}
