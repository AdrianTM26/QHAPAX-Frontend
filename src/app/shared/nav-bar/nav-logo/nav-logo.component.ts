// Angular import
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CollapseServiceService } from 'src/app/services/collapse-service.service';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent {
  // public props
  @Input() navCollapsed: boolean;
  @Output() NavCollapse = new EventEmitter();
  windowWidth: number;

  // Constructor
  constructor(
    private collapseServiceService: CollapseServiceService
  ) {
    this.windowWidth = window.innerWidth;
  }

  // public import
  navCollapse() {
    if (this.windowWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
    this.collapseServiceService.navCollapsed = this.navCollapsed;
  }
}
