import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/models/classes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Classes[]>{
    return this.http.get<Classes[]>(`${environment.api}/classes`);
  }

  add(clase: Classes): Observable<Classes>{
    return this.http.post<Classes>(`${environment.api}/classes`, clase);
  }

  edit(clase: Classes): Observable<Classes>{
    return this.http.put<Classes>(`${environment.api}/classes/${clase.id}`, clase);
  }

  delete(clase: Classes): Observable<Classes>{
    return this.http.delete<Classes>(`${environment.api}/classes/${clase.id}`);
  }
}