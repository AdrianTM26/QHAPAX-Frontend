import { Component } from '@angular/core';
import { TestModule } from '../../test.module';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports:[TestModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent { }
