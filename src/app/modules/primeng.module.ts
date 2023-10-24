import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

let primeng = [
  InputTextModule,
  ButtonModule
];

@NgModule({
  imports: primeng,
  exports: primeng
})
export class PrimengModule { }
