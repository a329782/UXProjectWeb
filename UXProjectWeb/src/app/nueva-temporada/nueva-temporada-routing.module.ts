import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaTemporadaPage } from './nueva-temporada.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaTemporadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaTemporadaPageRoutingModule {}
