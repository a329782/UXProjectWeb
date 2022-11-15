import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticasPage } from './estadisticas.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasPage
  },  {
    path: 'estadisticas2',
    loadChildren: () => import('./estadisticas2/estadisticas2.module').then( m => m.Estadisticas2PageModule)
  },
  {
    path: 'estadisticas3',
    loadChildren: () => import('./estadisticas3/estadisticas3.module').then( m => m.Estadisticas3PageModule)
  },
  {
    path: 'estadisticas4',
    loadChildren: () => import('./estadisticas4/estadisticas4.module').then( m => m.Estadisticas4PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasPageRoutingModule {}
