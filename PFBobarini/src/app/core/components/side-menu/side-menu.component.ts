import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sessions';
import { SessionService } from '../../authentication/services/session.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit, OnDestroy {


  sesion !: Sesion;
  suscripcion:any;
  admin: any;

  constructor(
    private sesionService: SessionService,
    private router: Router
  ) {
    this.suscripcion = this.sesionService.obtenerSesion().subscribe({
      next: (sesion: Sesion) => {
        this.sesion = sesion;
        if(sesion.usuarioActivo != undefined){
          this.admin = sesion.usuarioActivo?.admin;
          
        }
        
        
      },
      error: (error) => {
        console.error(error);
      }
    });

    


   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.suscripcion.unsubscribe();
  }

  irUsuario(){
    
    if(this.admin ==false || this.admin == undefined){
      alert("Usted no tiene permisos para ingresar a la opción.");
    }
    else{
      this.router.navigate(['features/usuarios']);
    }

    
  }

}
