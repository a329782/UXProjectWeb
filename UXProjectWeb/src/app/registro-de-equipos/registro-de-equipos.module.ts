import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDeEquiposPageRoutingModule } from './registro-de-equipos-routing.module';

import { RegistroDeEquiposPage } from './registro-de-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroDeEquiposPageRoutingModule
  ],
  declarations: [RegistroDeEquiposPage]
})
export class RegistroDeEquiposPageModule {}
