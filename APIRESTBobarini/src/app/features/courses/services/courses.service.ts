import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Course } from 'src/app/models/courses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  cursos: Course[]= []
private cursosSubject: BehaviorSubject<Course[]>;

  constructor(
    private http: HttpClient
  ) { 
    this.cursosSubject = new BehaviorSubject<Course[]>(this.cursos);
    this.obtenerCursos().subscribe({
      next: (data: Course[]) => {
        this.cursos = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
  }

  obtenerCursos(): Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.api}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }
  obtenerCursoId(id:number){
    return this.cursos[id-1];
  }

  agregarCurso(curso: Course){
    this.http.post(`${environment.api}/courses/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  eliminarCurso(id:number){
    const curso = this.obtenerCursoId(id);
    curso.deleted = true;

    this.http.put<Course>(`${environment.api}/courses/${id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    
  }
  editarCurso(curso: Course){
    this.http.put<Course>(`${environment.api}/courses/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
