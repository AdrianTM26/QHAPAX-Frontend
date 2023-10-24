import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


let materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports:
    materialModules,
  exports:
    materialModules

})
export class MaterialModule { }
