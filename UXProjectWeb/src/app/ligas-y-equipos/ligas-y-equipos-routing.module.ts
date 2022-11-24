import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigasYEquiposPage } from './ligas-y-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: LigasYEquiposPage
  },
  {
    path: 'detalles',
    loadChildren: () => import('../ligas-y-equipos/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigasYEquiposPageRoutingModule {}
