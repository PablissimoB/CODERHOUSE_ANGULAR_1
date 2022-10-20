import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { Course } from '../../model/courses';
import { CourseService } from '../../services/course.service';
import { Profesor } from '../../model/profesors';
import { ProfesorService } from '../../services/profesor.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

cursos !: Course[];
profesores !: Profesor[];
cursos$ !: Observable<Course[]>;
suscripcion: any;
promesa: Promise<Profesor[]>;
name ='';
active :boolean = true;
mostrar :boolean = false;
estilo= 'mostrar';

  constructor(
    private cursoService: CourseService,
    private profesorService: ProfesorService
  ) { 
    
    this.suscripcion = this.cursoService.obtenerCursosObservable().subscribe({
      next: (cursos: Course[]) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.cursos$ = this.cursoService.obtenerCursosObservable();

    this.promesa = profesorService.obtenerProfesorPromesa();

  }

  ngOnInit(): void {
 
    this.estilo='filtrar';
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }



  showAll(e:boolean){
    if(e){
      this.estilo='mostrar';
      this.SearchName(this.name);
    }
    else{
      this.name='';
      this.estilo='filtrar';
      this.active=true;
      this.cursos$ = this.cursoService.obtenerCursosObservable();
    }
  }

  SearchName(e:string){
    if(this.active ==false){
      this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
        map((cursos: Course[]) => cursos.filter((curso: Course) => curso.nombre.toUpperCase().includes(this.name.toUpperCase()) && curso.activo ==this.active))
        );
    }
    else{
      this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
        map((cursos: Course[]) => cursos.filter((curso: Course) => curso.nombre.toUpperCase().includes(this.name.toUpperCase()) && curso.activo ==this.active))
        );
    }    
  }

  FilterByStatus(e:boolean){
    if(this.name==''){
      this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
        map((cursos: Course[]) => cursos.filter((curso: Course) => curso.activo ==this.active))
        );
    }
    else{
      this.cursos$ = this.cursoService.obtenerCursosObservable().pipe(
        map((cursos: Course[]) => cursos.filter((curso: Course) => curso.nombre.toUpperCase().includes(this.name.toUpperCase()) && curso.activo ==this.active))
        );
    }
  }


}
