import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test.routes';

import { TestComponent } from './test.component';
import { MaterialModule } from '../material.module';
import { CalendarComponent } from './pages/calendar/calendar.component';

@NgModule({
  declarations: [
    TestComponent,
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
