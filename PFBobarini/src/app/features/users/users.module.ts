import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { InitUsersComponent } from './components/init-users/init-users.component';


@NgModule({
  declarations: [
    AddUsersComponent,
    EditUsersComponent,
    ListUsersComponent,
    InitUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
