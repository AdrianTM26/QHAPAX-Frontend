// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { CardModule } from './components';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    NgScrollbarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    SpinnerComponent,
    NgScrollbarModule
  ],
  declarations: [SpinnerComponent]
})
export class SharedModule {}
