import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sessions';
import { environment } from 'src/environments/environment';
import { Users } from '../../../models/users';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  sesionSubject!: BehaviorSubject<Sesion>;
  constructor(
    private http: HttpClient
  ) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
   }

   login(nombre: string, contrasena: string){
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        nombre: nombre,
        contrasena: contrasena
      }
      
    }

    this.sesionSubject.next(sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
  obtenerDatos(): Observable<Users[]>{
    return this.http.get<Users[]>(`${environment.api}/users`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    });
  }

}
