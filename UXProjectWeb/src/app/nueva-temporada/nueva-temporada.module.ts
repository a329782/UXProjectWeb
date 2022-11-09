import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaTemporadaPageRoutingModule } from './nueva-temporada-routing.module';

import { NuevaTemporadaPage } from './nueva-temporada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaTemporadaPageRoutingModule
  ],
  declarations: [NuevaTemporadaPage]
})
export class NuevaTemporadaPageModule {}
