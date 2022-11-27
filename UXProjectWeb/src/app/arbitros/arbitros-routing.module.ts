import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitrosPage } from './arbitros.page';

const routes: Routes = [
  {
    path: '',
    component: ArbitrosPage
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
export class ArbitrosPageRoutingModule {}
