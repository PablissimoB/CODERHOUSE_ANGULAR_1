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
  private coursesSubject: BehaviorSubject<Course[]>;
  
  constructor(
    private http: HttpClient
  ) { 
    this.coursesSubject = new BehaviorSubject<Course[]>(this.cursos);
    this.getAll().subscribe({
        next: (data: Course[]) => {
          this.cursos = data;
        },
        error: (error) => {
          console.error(error);
        }
    });
    }

     getAll(): Observable<Course[]>{
    return this.http.get<Course[]>(`${environment.api}/courses`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }
  getId(id:number){
    this.getAll().subscribe({
      next: (data: Course[]) => {
        this.cursos = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    const resultado = this.cursos.find(x => x.id == id);
    return resultado;
  }

  add(curso: Course){
    this.http.post(`${environment.api}/courses/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  delete(id:number){
    const curso = this.getId(id);
    if(curso == undefined){

    }
    else{
      curso.deleted = true;
    }

    this.http.put<Course>(`${environment.api}/courses/${id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    
  }
  edit(curso: Course){
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
