import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CourseState } from 'src/app/models/course.state';
import { Course } from 'src/app/models/courses';
import { loadCourses } from '../../state/courses.actions';
import { selectStateCargando, selectStateCursos } from '../../state/courses.selectors';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  courses$!:Observable<Course[]>;
  cargando$!: Observable<boolean>;
  suscripcionCursos!: Subscription;
  constructor(
    private router: Router,
    private store: Store <CourseState>
  )
  {
    this.store.dispatch(loadCourses());
    this.cargando$ = this.store.select(selectStateCargando);
  }

  ngOnInit(): void {
    
    this.courses$ = this.store.select(selectStateCursos);
  }
  ngOnDestroy(): void {
    
  }
}
