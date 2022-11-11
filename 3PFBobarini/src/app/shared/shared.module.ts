import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ConvertirBooleanoPipe } from './pipe/convertir-booleano.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';




@NgModule({
  declarations: [
    ConvertirBooleanoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientTestingModule

  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    ConvertirBooleanoPipe,
    HttpClientModule,
    HttpClientTestingModule,
  ]

})
export class SharedModule { }
