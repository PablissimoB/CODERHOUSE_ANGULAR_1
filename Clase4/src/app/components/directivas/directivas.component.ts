import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  variable: number =5;
  listaNombres: Array<Persona>=[
    {nombre:'Pablo', edad:26},
    {nombre:'Celeste', edad:30},
    {nombre:'Axel', edad:5}
  ];
  fecha: Date = new Date();
  constructor() { }

  ngOnInit(): void {

  }

}
