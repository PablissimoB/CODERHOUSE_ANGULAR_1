import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Students } from 'src/app/models/students';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  estudiantes: Students[]=[]
  private estudiantesSubject: BehaviorSubject<Students[]>;
  constructor(
    private http: HttpClient
  ) {
    this.estudiantesSubject = new BehaviorSubject<Students[]>(this.estudiantes);
   }

   getAll(): Observable<Students[]>{
    return this.http.get<Students[]>(`${environment.api}/students`, {
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
      next: (data: Students[]) => {
        this.estudiantes = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    const resultado = this.estudiantes.find(x => x.idStudent == id);
    return resultado;
  }

  add(estudiante: Students){
    this.http.post(`${environment.api}/students/`, estudiante, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  delete(id:number){
    const estudiante = this.getId(id);
    if(estudiante ==undefined){
      console.log("error");
    }
    else{
      this.http.delete<Students>(`${environment.api}/students/${id}`).pipe(
        catchError(this.manejarError)
      ).subscribe();
    }
    
  }

  edit(estudiante: Students){
    this.http.put<Students>(`${environment.api}/students/${estudiante.idStudent}`, estudiante).pipe(
      catchError(this.manejarError)
    ).subscribe();
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
