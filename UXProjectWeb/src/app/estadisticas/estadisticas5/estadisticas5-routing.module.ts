import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Estadisticas5Page } from './estadisticas5.page';

const routes: Routes = [
  {
    path: '',
    component: Estadisticas5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Estadisticas5PageRoutingModule {}
