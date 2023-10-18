import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { NavigationItem } from './shared/navigation/navigation';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NavLeftComponent } from './shared/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './shared/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NavLogoComponent } from './shared/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './shared/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './shared/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './shared/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './shared/navigation/nav-content/nav-item/nav-item.component';
// import { SharedModule } from './shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    // SharedModule, 
    BrowserAnimationsModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
