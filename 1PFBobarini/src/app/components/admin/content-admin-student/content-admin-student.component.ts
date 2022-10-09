import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Student, students } from '../../../models/students';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentFormComponent } from '../students/add-student-form/add-student-form.component';
import { EditStudentFormComponent } from '../students/edit-student-form/edit-student-form.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin-student.component.html',
  styleUrls: ['./content-admin-student.component.css']
})
export class ContentAdminComponent implements OnInit {

  
  estudiantes : Array<Student> = students;
  estudianteEditar:any;
  columnasEstudiantes: string[] = ['dni', 'nombreCompleto', 'fechaNacimiento','mail', 'acciones']
  dataSourceEstudiantes: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.estudiantes);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(
    private dialog: MatDialog,
  ) {   }

  ngOnInit(): void {
  }

  

  ngAfterViewInit() {
    this.dataSourceEstudiantes.paginator = this.paginator;
  }

  openDialogAdd(){
    let dialog = this.dialog.open(AddStudentFormComponent, {
      width: '55%', height: '70%',
    })
    dialog.beforeClosed().subscribe(res =>{
      //comprueba que res no este vacio - caso boton cancelar
      if(res !==''){
        //comprueba que el dni no este ya cargado
        if(this.estudiantes.findIndex(estudiante => estudiante.dni == res.dni) == -1){
          //caso no cargado lo agrega y actualiza dataSource
          this.estudiantes.push(
            {
              ...res,
              vigente : true,
            }
          )
          this.dataSourceEstudiantes.data = this.estudiantes;
        }
        else{
          //caso cargado emite mensaje de error
          alert('Ya existe un estudiante con ese DNI.');
        }
      }
    })
  }

  openDialogEdit(dniE:number){
    this.estudianteEditar = this.estudiantes[this.estudiantes.findIndex(estudiante => estudiante.dni == dniE)];
    let dialog = this.dialog.open(EditStudentFormComponent, {
      width: '55%',
      height: '70%', 
      data: {
        dataKey: this.estudianteEditar,
        }
      });
      
      dialog.beforeClosed().subscribe(res =>{
        if(res !==''){
          let objIndex = this.estudiantes.findIndex(estudiante => estudiante.dni == dniE);
          this.estudiantes[objIndex].dni = res.dni;
          this.estudiantes[objIndex].nombre = res.nombre;
          this.estudiantes[objIndex].apellido = res.apellido;
          this.estudiantes[objIndex].fechaNacimiento = res.fechaNacimiento;
          this.estudiantes[objIndex].mail = res.mail;
          this.dataSourceEstudiantes.data = this.estudiantes;
        }
      })

  }



  deleteStudent(dni:number){
    if(confirm("¿Desea eliminar el alumno dni " + dni +" ?")) {
      //busca la posición del estudiante dni
      const index = this.estudiantes.findIndex((estudiante)=>{
        return estudiante.dni === dni;
      }
      )
      this.estudiantes[index].vigente = false;
      this.estudiantes = this.estudiantes.filter(row => row.vigente==true);
      this.dataSourceEstudiantes.data = this.estudiantes;
    }
  }

  filtrarDni(event: Event){
    const valorTipeado = (event.target as HTMLInputElement).value;
    this.dataSourceEstudiantes.filterPredicate = function (estudiante: Student, filtro: string){
      return estudiante.dni.toString().includes(filtro.toLocaleLowerCase());
    };
    this.dataSourceEstudiantes.filter = valorTipeado.trim();
  }



}
