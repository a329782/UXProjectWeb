import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Estadisticas3Page } from './estadisticas3.page';

const routes: Routes = [
  {
    path: '',
    component: Estadisticas3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Estadisticas3PageRoutingModule {}
