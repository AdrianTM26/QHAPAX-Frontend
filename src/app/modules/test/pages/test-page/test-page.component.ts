import { Component } from '@angular/core';
import { TestModule } from '../../test.module';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports:[TestModule],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {

}
