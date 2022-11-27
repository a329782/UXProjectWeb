import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDeArbitrosPage } from './registro-de-arbitros.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDeArbitrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDeArbitrosPageRoutingModule {}
