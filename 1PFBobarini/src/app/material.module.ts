import { NgModule } from "@angular/core";
import { MatToolbarModule} from "@angular/material/toolbar"
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatNativeDateModule,
        MatDialogModule,
        MatDatepickerModule,
        MatPaginatorModule,
        
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatNativeDateModule,
        MatDialogModule,
        MatDatepickerModule,
        MatPaginatorModule,
        
    ]
})
export class MaterialModule {}