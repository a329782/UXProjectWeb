import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Estadisticas5PageRoutingModule } from './estadisticas5-routing.module';

import { Estadisticas5Page } from './estadisticas5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Estadisticas5PageRoutingModule
  ],
  declarations: [Estadisticas5Page]
})
export class Estadisticas5PageModule {}
