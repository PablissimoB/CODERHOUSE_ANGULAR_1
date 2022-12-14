import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/sessions';
import { SessionService } from '../../authentication/services/session.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sesion !: Sesion;
  suscripcion:any;
  admin: boolean=false;

  
  constructor(
    private sesionService: SessionService,
  ) { 

    this.suscripcion = this.sesionService.obtenerSesion().subscribe({
      next: (sesion: Sesion) => {
        this.sesion = sesion;
        
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  ngOnInit(): void {
    this.suscripcion.unsubscribe();
  }

}
