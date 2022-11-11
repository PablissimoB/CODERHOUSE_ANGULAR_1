import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classes } from '../../../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  clases: Classes[] = []
  private clasesSubject: BehaviorSubject<Classes[]>;

  constructor(
    private http: HttpClient
  ) { 
    this.clasesSubject = new BehaviorSubject<Classes[]>(this.clases);
    this.obtener().subscribe({
      next: (data: Classes[]) => {
        this.clases = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
  }

  obtener(): Observable<Classes[]>{
    return this.http.get<Classes[]>(`${environment.api}/classes`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerId(id:number){
    this.obtener().subscribe({
      next: (data: Classes[]) => {
        this.clases = data;
      },
      error: (error) => {
        console.error(error);
      }
  });
    const resultado = this.clases.find(x => x.id == id);
    return resultado;
  }



  actualizarEstado(idCurso:number){
    let clasesActualizadas = this.clases.filter(item => item.idCourse === idCurso);
    for(let i of clasesActualizadas){
      i.available=false;
      let indice = this.clases.findIndex((c: Classes) => c.id === i.id);
      if(indice > -1){
        this.clases[indice] = i;
        }
      this.clasesSubject.next(this.clases);
    }
  }

  agregar(item: Classes){
        this.http.post(`${environment.api}/classes/`, item, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }
  
  eliminar(id:number){
    const item = this.obtenerId(id);
    if(item ==undefined){
      console.log("error");
    }
    else{
      item.deleted = true;
    }
    
    this.http.put<Classes>(`${environment.api}/classes/${id}`, item).pipe(
      catchError(this.manejarError)
    ).subscribe();
  }

  eliminarAlumno(idE:number,idC:number){
    let indice = this.clases.findIndex((c: Classes) => c.id ===idC)
    if(indice > -1){
      for( let i of this.clases[indice].idStudent){
        if(i === idE){
          const indice2 = this.clases[indice].idStudent.indexOf(i);
          this.clases[indice].idStudent.splice(indice2,1);
        }
      }
    }
    this.clasesSubject.next(this.clases);
  }

  agregarAlumno(idE:number,idC:number){
    let indice = this.clases.findIndex((c: Classes) => c.id ===idC)
    let agregar :boolean = true;
    if(indice > -1){

      for( let i of this.clases[indice].idStudent){
        if(i === idE){
          agregar=false;
        }
      }
      if(agregar){
        this.clases[indice].idStudent.push(idE);
      }
    }
    this.clasesSubject.next(this.clases);
  }


  editar(item: Classes){
    this.http.put<Classes>(`${environment.api}/classes/${item.id}`, item).pipe(
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
