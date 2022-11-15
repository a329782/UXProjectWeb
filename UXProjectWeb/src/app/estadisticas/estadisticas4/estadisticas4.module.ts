import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Estadisticas4PageRoutingModule } from './estadisticas4-routing.module';

import { Estadisticas4Page } from './estadisticas4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Estadisticas4PageRoutingModule
  ],
  declarations: [Estadisticas4Page]
})
export class Estadisticas4PageModule {}
