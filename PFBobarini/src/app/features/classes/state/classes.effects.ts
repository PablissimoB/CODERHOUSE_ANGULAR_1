import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as ClassesActions from './classes.actions';
import { ClassesService } from '../services/classes.service';


@Injectable()
export class ClassesEffects {

  loadClassess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ClassesActions.loadClasses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.services.get().pipe(
          map(classes => ClassesActions.loadClassesSuccess({ classes })),
          catchError(error => of(ClassesActions.loadClassesFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions,
    private services: ClassesService
    ) {}
}
