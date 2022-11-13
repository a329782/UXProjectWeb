import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Calendario2Page } from './calendario2.page';

const routes: Routes = [
  {
    path: '',
    component: Calendario2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calendario2PageRoutingModule {}
