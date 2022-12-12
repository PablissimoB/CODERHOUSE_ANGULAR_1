import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '../services/courses.service';
import { loadCoursesSuccess } from './courses.actions';


@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions,
    private courseService: CoursesService) {}

 loadCourses$ = createEffect(
    () => {return this.actions$.pipe(
          ofType(CoursesActions.loadCourses),
          mergeMap(
            () => this.courseService.getAll().pipe(
              map(data => CoursesActions.loadCoursesSuccess({courses: data })),
              catchError(err => of(CoursesActions.loadCoursesFailure({error:err})))
            ))
          )
        });


  
}
