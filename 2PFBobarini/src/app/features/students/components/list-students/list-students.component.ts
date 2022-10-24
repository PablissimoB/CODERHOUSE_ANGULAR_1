import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Students } from 'src/app/models/students';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  estudiantes$!: Observable<Students[]>
  estudiantes!: Array<Students>;
  suscripcion: any;
  columnasEstudiantes: string[] = ['id','dni', 'nombreCompleto', 'fechaNacimiento','fechaAlta', 'acciones']
  dataSourceEstudiantes: MatTableDataSource<Students>;
  

  
  constructor(
    private estudianteService: StudentsService,
    private router: Router
  ) { 
    this.estudiantes$ = this.estudianteService.obtenerEstudiantes().pipe(
      map((cursos: Students[]) => cursos.filter((curso: Students) => curso.deleted ==false))
      );
    this.suscripcion = this.estudiantes$.subscribe({
      next: (estudiantes: Students[]) => {
        this.estudiantes = estudiantes;
      },
      error: (error) => {
        console.error(error);
      }
  });
  this.dataSourceEstudiantes = new MatTableDataSource<Students>(this.estudiantes);
}

  ngOnInit(): void {

  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSourceEstudiantes.paginator = this.paginator;
  }

  eliminar(id: number){
    if(confirm("Esta seguro de eliminar el elemento id: "+id)) {
      this.estudianteService.eliminarEstudiante(id);
    }
    this.dataSourceEstudiantes = new MatTableDataSource<Students>(this.estudiantes);
  }
  editar(id: number){
    this.router.navigate(['features/estudiantes/edit',{id:id}]);
  }
}
