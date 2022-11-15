import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Estadisticas4Page } from './estadisticas4.page';

const routes: Routes = [
  {
    path: '',
    component: Estadisticas4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Estadisticas4PageRoutingModule {}
