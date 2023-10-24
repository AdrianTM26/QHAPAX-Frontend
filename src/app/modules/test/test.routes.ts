import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test-page', loadComponent: () => import('../test/pages/test-page/test-page.component').then(c => c.TestPageComponent) },
  { path: 'sample-page', loadComponent: () => import('../test/pages/sample-page/sample-page.component').then(c => c.SamplePageComponent) },
  { path: 'calendar', loadComponent: () => import('../test/pages/calendar/calendar.component').then(c => c.CalendarComponent) },
  { path: 'historico-controversia', loadComponent: () => import('../test/pages/historico-controversia/historico-controversia.component').then(c => c.HistoricoControversiaComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TestRoutingModule { }
