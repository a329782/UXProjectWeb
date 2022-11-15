import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Estadisticas2Page } from './estadisticas2.page';

const routes: Routes = [
  {
    path: '',
    component: Estadisticas2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Estadisticas2PageRoutingModule {}
