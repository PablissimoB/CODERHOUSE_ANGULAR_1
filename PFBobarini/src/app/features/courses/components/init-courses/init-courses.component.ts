import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CourseState } from 'src/app/models/course.state';
import { Course } from '../../../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { loadCoursesSuccess, loadCoursesFailure, loadCourses } from '../../state/courses.actions';
import { selectStateCargando, selectStateCursos } from '../../state/courses.selectors';

@Component({
  selector: 'app-init-courses',
  templateUrl: './init-courses.component.html',
  styleUrls: ['./init-courses.component.css']
})
export class InitCoursesComponent implements OnInit{



  constructor(
    
  )
  {
    

  }

  ngOnInit(): void {

    
  }
}
