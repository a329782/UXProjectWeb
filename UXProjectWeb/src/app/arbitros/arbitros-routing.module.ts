import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitrosPage } from './arbitros.page';

const routes: Routes = [
  {
    path: '',
    component: ArbitrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbitrosPageRoutingModule {}
