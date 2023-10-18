import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test.routes';

import { TestComponent } from './test.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    TestRoutingModule,
    MaterialModule,
    CommonModule,
  ], exports: [
    MaterialModule
  ]
})
export class TestModule { }
