import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Students } from 'src/app/models/students';
import { StudentState } from '../../../../models/student.state';
import { loadStudents } from '../../state/students.actions';
import { selectStateCargando, selectStateEstudiantes } from '../../state/students.selectors';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {

  students$!:Observable<Students[]>;
  cargando$!: Observable<boolean>;
  columnasEstudiantes: string[] = ['id','dni', 'nombreCompleto', 'fechaNacimiento','fechaAlta', 'acciones']
  dataSource!: MatTableDataSource<Students>;
  paginator!: MatPaginator;

  constructor(
    private router: Router,
    private store: Store <StudentState>,
    private dialog: MatDialog,
  )
  {
    this.store.dispatch(loadStudents());
    this.cargando$ = this.store.select(selectStateCargando);
  }

  ngOnInit(): void {
    this.students$ = this.store.select(selectStateEstudiantes);
    this.store.select(selectStateEstudiantes).subscribe((data: Students[]) => {
      this.dataSource = new MatTableDataSource<Students>(data);
    }
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  eliminar(id: number){
    if(confirm("Esta seguro de eliminar el elemento id: "+id)) {

    }
  }
  editar(id: number){
    this.router.navigate(['features/estudiantes/edit',{id:id}]);
  }
  consultar(id: number){

  }
}
