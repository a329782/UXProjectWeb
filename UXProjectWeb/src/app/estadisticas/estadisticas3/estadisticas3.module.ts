import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Estadisticas3PageRoutingModule } from './estadisticas3-routing.module';

import { Estadisticas3Page } from './estadisticas3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Estadisticas3PageRoutingModule
  ],
  declarations: [Estadisticas3Page]
})
export class Estadisticas3PageModule {}
