import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Estadisticas2PageRoutingModule } from './estadisticas2-routing.module';

import { Estadisticas2Page } from './estadisticas2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Estadisticas2PageRoutingModule
  ],
  declarations: [Estadisticas2Page]
})
export class Estadisticas2PageModule {}
