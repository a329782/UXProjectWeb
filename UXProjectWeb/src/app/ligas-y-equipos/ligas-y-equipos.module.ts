import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigasYEquiposPageRoutingModule } from './ligas-y-equipos-routing.module';

import { LigasYEquiposPage } from './ligas-y-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigasYEquiposPageRoutingModule
  ],
  declarations: [LigasYEquiposPage]
})
export class LigasYEquiposPageModule {}
