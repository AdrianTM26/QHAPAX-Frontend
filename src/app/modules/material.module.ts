import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

let materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports:
    materialModules,
  exports:
    materialModules

})
export class MaterialModule { }
