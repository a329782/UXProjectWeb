import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigasYEquiposPage } from './ligas-y-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: LigasYEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigasYEquiposPageRoutingModule {}
