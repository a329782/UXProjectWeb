import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeEquiposPage } from './registro-de-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeEquiposPageRoutingModule {}
