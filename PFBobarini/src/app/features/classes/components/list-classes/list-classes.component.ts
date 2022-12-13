import { Component, OnInit } from '@angular/core';
import { ClassesState } from '../../state/classes.reducer';
import { loadClasses } from '../../state/classes.actions';
import { selectStateCargando, selectStateClases } from '../../state/classes.selectors';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { Classes } from 'src/app/models/classes';
import { Course } from 'src/app/models/courses';
import { Students } from 'src/app/models/students';
import { CourseState } from 'src/app/models/course.state';
import { StudentState } from 'src/app/models/student.state';
import { loadCourses } from '../../../courses/state/courses.actions';
import { loadStudents } from '../../../students/state/students.actions';
import { selectStateEstudiantes } from '../../../students/state/students.selectors';
import { selectStateCursos } from '../../../courses/state/courses.selectors';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent implements OnInit{

  panelOpenState = false;
  clases$!:Observable<Classes[]>;
  cargando$!: Observable<boolean>;
  cargando1$!: Observable<boolean>;
  cargando2$!: Observable<boolean>;
  clases!:Classes[];
  estudiantes$ !: Observable<Students[]>;
  cursos$!: Observable<Course[]>
  joinedCursos!:any;
  joinedEstudiantes!:any;
  suscripcion!:any;
  available = 'available';
  unavailable = 'unavailable';
  mostrar='mostrar';
  ocultar='ocultar;'

  constructor(
    private router: Router,
    private store: Store <ClassesState>,
    private storeC: Store <CourseState>,
    private storeS: Store <StudentState>,
  )
  {
    this.store.dispatch(loadClasses());
    this.storeC.dispatch(loadCourses());
    this.storeS.dispatch(loadStudents());
    this.cargando$ = this.store.select(selectStateCargando);
    this.cargando1$ = this.storeC.select(selectStateCargando);
    this.cargando2$ = this.storeS.select(selectStateCargando);

  }

  ngOnInit(): void {
    
    this.clases$ = this.store.select(selectStateClases);
    this.cursos$ = this.storeC.select(selectStateCursos);
    this.estudiantes$ = this.storeS.select(selectStateEstudiantes);

      this.suscripcion = this.clases$.subscribe({
        next: (clases: Classes[]) => {
          this.clases = clases;
          this.crearClasesCursos();
          this.crearClasesEstudiantes();
          console.log(this.joinedCursos);
          console.log(this.joinedEstudiantes);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  crearClasesCursos(){
    combineLatest([
      this.clases$,this.cursos$
    ]).subscribe(([arrayOne, arrayTwo]) => {
      this.joinedCursos = arrayOne.map(item => ({
        ...arrayTwo.find(t => Number(t.id) === Number(item.idCourse)),
        ...item
      }));
    });
  }

  crearClasesEstudiantes(){
    combineLatest([
      of(this.crearArregloEstudiantes()),this.estudiantes$
    ]).subscribe(([arrayOne, arrayTwo]) => {
      this.joinedEstudiantes = arrayOne.map(item => ({
        ...arrayTwo.find(t => Number(t.idStudent) === Number(item.idStudent)),
        ...item
      }));
    });
  }


  crearArregloEstudiantes(){
    let clasesEstudiantes =[
      {
        idStudent:0,
        idClase:0
      }
    ];
    for(let i of this.clases){
      for(let x of i.idStudents){
        clasesEstudiantes.push(
          {
            idStudent: x,
            idClase: i.id
          }
         );
      }
    }
    return clasesEstudiantes;
  }

  eliminar(id: number){
    if(confirm("Esta seguro de eliminar el elemento id: "+id)) {

    }
  }

  editar(id: number){
    this.router.navigate(['features/clases/edit',{id:id}]);
  }

  agregarEstudiante(id:number, curso:string){
    this.router.navigate(['features/clases/addStudent',{id:id,curso:curso}]);
  }
  eliminarEstudiante(idE: number, idC:number){
    if(confirm("Esta seguro de eliminar el estudiante id: "+idE +" del curso id: "+idC)) {
    }

  }

}
