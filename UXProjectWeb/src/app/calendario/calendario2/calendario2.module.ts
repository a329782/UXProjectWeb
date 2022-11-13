import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Calendario2PageRoutingModule } from './calendario2-routing.module';

import { Calendario2Page } from './calendario2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Calendario2PageRoutingModule
  ],
  declarations: [Calendario2Page]
})
export class Calendario2PageModule {}
